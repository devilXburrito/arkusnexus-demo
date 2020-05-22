import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { User } from 'src/app/public/interfaces';

@Injectable({
  providedIn: 'root'
})

export class UserService {
    currentUser = new BehaviorSubject<User | null>(null);
}