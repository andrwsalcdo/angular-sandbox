import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  showExtended = true;
  loaded = false;

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
          }
        },
        {
          firstName: 'Sadio',
          lastName: 'Mane',
          age: 30,
          address: {
            street: '123 abc street',
            city: 'city',
            state: 'state'
          }
        }
      ];

      this.addUser({
        firstName: 'Mo',
        lastName: 'Salah'
      });

      this.loaded = true;
    }, 2000);
  }

  addUser(user: User) {
    this.users = [...this.users, user];
  }
}
