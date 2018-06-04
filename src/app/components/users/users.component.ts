import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
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

  constructor(private dataService: DataService) {}

  ngOnInit() {
    setTimeout(() => {
      this.dataService.getUsers().subscribe(users => {
        this.users = users;
        this.loaded = true;
      });
    }, 2000);
  }

  onSubmit({ value, valid }: { value: User; valid: boolean }) {
    if (!valid) {
      alert('Form is not valid');
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;

      this.users = this.dataService.addUser(value);
      // clear form
      this.form.reset();
    }
  }
}
