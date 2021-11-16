import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from 'rxjs/internal/Observable';
import {User} from "../models/User";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class UserResolveService implements Resolve<User> {
  constructor(private userService: UserService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> | Promise<User> | User {

    return this.userService.getUser(+route.params['id']);
  }
}
