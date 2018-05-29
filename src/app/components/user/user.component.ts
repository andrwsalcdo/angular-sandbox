import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User;

  constructor() {}

  ngOnInit() {
    this.user = {
      firstName: 'john',
      lastName: 'doe',
      age: 30,
      address: {
        street: '123 abc street',
        city: 'city',
        state: 'state'
      }
    };
  }
}
