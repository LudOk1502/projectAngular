import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {IUser} from "../../interfaces";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  @Input()
  user: IUser;
  @Output()
  userName = new EventEmitter<string>();

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  navTo() {
    this.router.navigate([this.user.id], {relativeTo: this.activatedRoute, state: this.user});
  }

  lift() {
    this.userName.emit(this.user.name);
  }
}
