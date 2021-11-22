import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {UsersComponent} from './components/users/users.component';
import {UserComponent} from "./components/user/user.component";
import {PostsComponent} from './components/posts/posts.component';
import {PostComponent} from './components/post/post.component';
import {Route, RouterModule} from "@angular/router";

import {UserDetailsComponent} from './components/user-details/user-details.component';
import {PostDetailsComponent} from './components/post-details/post-details.component';
import {HomeComponent} from './components/home/home.component';
import {TestGuard} from "./guards/test.guard";
import {FormsComponent} from './components/forms/forms.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

const routes: Route[] = [
  {path: '', redirectTo: 'users', pathMatch: 'full'},
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'users',
        component: UsersComponent
      },
      {path: 'users/:id', component: UserDetailsComponent},
      {
        path: 'posts',
        component: PostsComponent,
        children: [{path: ':id', component: PostDetailsComponent}]
      }]
  },
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    PostsComponent,
    PostComponent,
    UserDetailsComponent,
    PostDetailsComponent,
    HomeComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
