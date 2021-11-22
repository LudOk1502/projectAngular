import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

import {UserService} from "../../services";
import {IUser} from "../../interfaces";

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  @Input()
  user: IUser;

  myForm: FormGroup;
  users: IUser[];

  constructor(private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      userId: new FormControl(1)
    })
    this.userService.getUsers().subscribe(value => this.users = value)
  }

  showDetails() {
    const id = this.myForm.controls['userId'].value;
    this.user = this.users[id - 1];
    this.router.navigate([this.user.id], {relativeTo: this.activatedRoute, state: this.user})
  }
}
