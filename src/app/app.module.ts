import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {UsersComponent} from './components/users/users.component';
import {UserComponent} from "./components/user/user.component";
import {PostComponent} from './components/post/post.component';
import {RouterModule} from "@angular/router";
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {UserService} from "./services/user.service";
import {UserResolveService} from "./services/user-resolve.service";

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    PostComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'users',
        component: UsersComponent,
        children: [
          {path: ':id', component: UserDetailsComponent, resolve:{data:UserResolveService}}
        ]
      },
      {path: 'posts', component: PostComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
