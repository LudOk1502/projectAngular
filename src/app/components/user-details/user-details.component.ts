import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {IPost, IUser} from "../../interfaces";
import {PostService} from "../../services";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: IUser;
  posts: IPost[];

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private postService: PostService) {
    this.activatedRoute.params.subscribe(value => {
      this.user = this.router.getCurrentNavigation()?.extras.state as IUser;
    })
  }

  ngOnInit(): void {
    this.postService.getPost(this.user.id).subscribe(value => this.posts = value);
  }

  backHome() {

  }
}
