import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {urls} from "../constants";
import {IPost} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) {
  }

  getPosts(): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(urls.posts);
  };

  getPost(id: number): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(urls.posts + '?userId=' + id);
  };
}
