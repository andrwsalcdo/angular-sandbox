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
  enableAdd = true;

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
          image: 'http://lorempixel.com/600/600/people/1'
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
          image: 'http://lorempixel.com/600/600/people/2'
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
