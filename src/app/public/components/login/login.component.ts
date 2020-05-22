import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, AsyncValidatorFn, FormControl, ValidationErrors } from '@angular/forms';
import { map, debounceTime, switchMap, distinctUntilChanged, first } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

import { LoginService } from '../../services';
import { UserService } from '../../../shared/services';
import { User } from '../../interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginFailed$ = new BehaviorSubject<boolean | null>(null);
  userFound = null;
  form: FormGroup;

  constructor(
    private $login: LoginService,
    private $formBuilder: FormBuilder,
    private $router: Router,
    private $route: ActivatedRoute,
    private $uS: UserService
    ) { }

  ngOnInit() {
    this.$uS.currentUser.next(null);
    this.form = this.$formBuilder.group({
      email: ['', [Validators.required, Validators.email], this.userExist().bind(this)],
      password: ['', [Validators.required]],
    });
  }

  userExist(): AsyncValidatorFn {
    return (c: FormControl): Observable<ValidationErrors  | null> => {
      return c.valueChanges
      .pipe(
        debounceTime(800),
        distinctUntilChanged(),
        switchMap(() => this.$login.getUsers()),
        map((users: User[]) => {
          this.userFound = users.filter((u => u.email === c.value)) ?
            users.filter((u => u.email === c.value))[0] : null;
          return this.userFound ?
            null : { userExist: true };
        })
      ).pipe(first());
    };
  }

  submit() {
    if (!this.form.valid && !this.userFound) { return; }
    if (this.form.controls.password.value === this.userFound.password) {
      this.loginFailed$.next(false);

      /* for practical purposes im storing the current user value in a MVC/Observer pattern way
      theorically we should store user session on a http only cookie(+security) and validate it on the
      server side with a JWT or OAuth*/
      this.$uS.currentUser.next(this.userFound);
      this.$router.navigate(['../../private'], {relativeTo: this.$route});
    } else {
      this.form.controls.password.setErrors({loginFailed: true});
      this.loginFailed$.next(true);
    }
  }
}
