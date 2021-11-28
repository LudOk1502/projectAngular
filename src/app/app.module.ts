import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {Route, RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {registerLocaleData} from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import localeUK from '@angular/common/locales/uk';

import {AppComponent} from './app.component';
import {UsersComponent} from './components/users/users.component';
import {UserComponent} from "./components/user/user.component";
import {PostsComponent} from './components/posts/posts.component';
import {PostComponent} from './components/post/post.component';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {PostDetailsComponent} from './components/post-details/post-details.component';
import {HomeComponent} from './components/home/home.component';
import {TestGuard} from "./guards/test.guard";
import {FormsComponent} from './components/forms/forms.component';
import {TestComponent} from './components/test/test.component';
import {IncrementPipe} from './pipes/increment.pipe';
import { BoldAndColorDirective } from './directives/bold-and-color.directive';

registerLocaleData(localeRu, 'ru');
registerLocaleData(localeUK, 'uk');
const routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'users',
        component: UsersComponent,
        canActivate: [TestGuard],
        canDeactivate: [TestGuard],
        children: [{path: ':id', component: UserDetailsComponent}]
      },
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
    FormsComponent,
    TestComponent,
    IncrementPipe,
    BoldAndColorDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'ru'},
    {provide: LOCALE_ID, useValue: 'uk'},
    IncrementPipe
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
