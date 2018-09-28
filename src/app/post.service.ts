import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

import { Post } from './model/Post';


const httpOptions = { headers: new HttpHeaders( { 'Content-Type': 'application/json' } ) }

@Injectable({
  providedIn: 'root'
})
export class PostService {

  postUrl: string = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]>{
    return this.http.get<Post[]>(this.postUrl + '/posts');
  }
  
  getPost(id): Observable<Post[]>{
    return this.http.get<Post[]>(this.postUrl + '/posts/' + id);
  }

  savePost(post: Post): Observable<Post>{
    return this.http.post<Post>(this.postUrl + '/posts', post, httpOptions);
  }

  updatePost(post: Post, id): Observable<Post> {
    const url =`${this.postUrl}/${post.id};`
    return this.http.put<Post>(this.postUrl + '/posts/'+ id, post, httpOptions);
  }

  removePost(post: Post | number ): Observable<Post>{
    const id = typeof post === 'number' ? post: post.id;
    return this.http.delete<Post>(`${this.postUrl}/posts/${id}`, httpOptions);
  }

}