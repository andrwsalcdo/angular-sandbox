import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  users: User[];

  constructor() {
    this.users = [
      {
        firstName: 'Bobby',
        lastName: 'Firmino',
        email: 'bobby@lfc.com',
        isActive: true,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true
      },
      {
        firstName: 'Sadio',
        lastName: 'Mane',
        email: 'mane@lfc.com',
        isActive: false,
        registered: new Date('04/02/2018 08:30:00'),
        hide: true
      }
    ];
  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(user: User) {
    // immutable unshift way
    this.users = [user, ...this.users];
    return this.users;
  }
}
