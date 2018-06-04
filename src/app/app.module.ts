import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/Forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostsComponent } from './components/posts/posts.component';

import { DataService } from './services/data.service';
import { PostsService } from './services/posts.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    NavbarComponent,
    PostsComponent
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [DataService, PostsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
