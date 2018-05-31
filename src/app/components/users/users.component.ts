import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];

  constructor() {}

  ngOnInit() {
    this.users = [
      {
        firstName: 'john',
        lastName: 'doe',
        age: 30,
        address: {
          street: '123 abc street',
          city: 'city',
          state: 'state'
        }
      },
      {
        firstName: 'andrew',
        lastName: 'doe',
        age: 30,
        address: {
          street: '123 abc street',
          city: 'city',
          state: 'state'
        }
      },
      {
        firstName: 'sauce sauce',
        lastName: 'doe',
        age: 30,
        address: {
          street: '123 abc street',
          city: 'city',
          state: 'state'
        }
      }
    ];

    this.addUser({
      firstName: 'zinedine',
      lastName: 'zidane',
      age: 30,
      address: {
        street: '123 abc street',
        city: 'city',
        state: 'state'
      }
    });
  }

  addUser(user: User) {
    this.users = [...this.users, user];
  }
}
