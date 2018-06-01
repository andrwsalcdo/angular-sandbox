import { Component, OnInit, ViewChild } from '@angular/core';
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
    email: ''
  };
  users: User[] = [];
  showExtended = true;
  loaded = false;
  showUserForm = false;
  @ViewChild('userForm') form: any;

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
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

      this.loaded = true;
    }, 2000);
  }

  onSubmit({ value, valid }: { value: User; valid: boolean }) {
    if (!valid) {
      alert('Form is not valid');
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;
      // immutable unshift
      this.users = [value, ...this.users];
      // clear form
      this.form.reset();
    }
  }
}
