import { Component, OnInit } from '@angular/core';
import { UserService } from './shared/services';
import { User } from './public/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  currentUser: User | null = null;
  constructor(
    private uS$: UserService
  ) {}

  ngOnInit() {
    this.uS$.currentUser.subscribe((user: User) =>
     setTimeout(() => this.currentUser = user, 0)
    );
  }

}
