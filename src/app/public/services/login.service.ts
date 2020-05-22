import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// models
import { User } from '../interfaces';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>('mock-api/users.json');
  }
}

