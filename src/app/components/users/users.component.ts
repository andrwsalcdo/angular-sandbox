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
  currentClasses: object = {};

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
          image: 'https://loremflickr.com/600/600/man',
          isActive: true,
          balance: 100,
          registered: new Date('01/02/2018 08:30:00')
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
          image: 'https://loremflickr.com/600/600/man',
          isActive: false,
          balance: 200,
          registered: new Date('04/02/2018 08:30:00')
        }
      ];

      this.addUser({
        firstName: 'Mo',
        lastName: 'Salah'
      });

      this.loaded = true;

      this.setCurrentClasses();
    }, 2000);
  }

  addUser(user: User) {
    this.users = [...this.users, user];
  }

  setCurrentClasses() {
    this.currentClasses = {
      'btn-success': this.enableAdd
    };
  }
}
