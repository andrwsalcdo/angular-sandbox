import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    age: null,
    address: {
      street: '',
      city: '',
      state: ''
    }
  };
  users: User[] = [];
  showExtended = true;
  loaded = false;
  showUserForm = false;

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.users = [
        {
          firstName: 'Bobby',
          lastName: 'Firmino',
          age: 30,
          address: {
            street: '123 abc street',
            city: 'city',
            state: 'state'
          },
          isActive: true,
          registered: new Date('01/02/2018 08:30:00'),
          hide: true
        },
        {
          firstName: 'Sadio',
          lastName: 'Mane',
          age: 30,
          address: {
            street: '123 abc street',
            city: 'city',
            state: 'state'
          },
          isActive: false,
          registered: new Date('04/02/2018 08:30:00'),
          hide: true
        }
      ];

      this.loaded = true;
    }, 2000);
  }

  addUser(user: User) {
    this.user.isActive = true;
    this.user.registered = new Date();
    // immutable unshift
    this.users = [this.user, ...this.users];
    // clear form
    this.user = {
      firstName: '',
      lastName: '',
      age: null,
      address: {
        street: '',
        city: '',
        state: ''
      }
    };
  }
}
