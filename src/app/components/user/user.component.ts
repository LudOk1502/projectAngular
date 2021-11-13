import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../models/User";
import {PostService} from "../../services/post.service";
import {Post} from "../../models/Post";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  @Input()
  user: User;

  posts: Post[] = [];

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.postService.getPost(this.user.id).subscribe(value => this.posts = value);
  }
}
