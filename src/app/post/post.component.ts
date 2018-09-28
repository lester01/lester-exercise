import { Component, OnInit } from '@angular/core';
import { Post } from '../model/Post';
import { PostService } from '../post.service'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: Post[];
  currentPost: Post = {
    id: 0,
    title: '',
    body: ''
  }
  isEdit: boolean = false;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(post => {
      this.post = post;
    })
  }

  onNewPost(post: Post){
    this.post.unshift(post);
  }

  editPost(post: Post,id){
    this.currentPost = post;
    this.isEdit = true;
  }

  onUpdatedPost(){
    this.post.forEach((cur, index) => {
      if (this.post[index].id === cur.id){
        this.post.splice(index, 1);
        this.post.unshift(cur);
        this.isEdit = false;

        this.currentPost = {
          id: 0,
          title: '',
          body: ''
        }
      }
    })
  }

  removePost(post: Post){
    if (confirm('Are you sure?')){
      this.postService.removePost(post).subscribe(p => {
        this.post.forEach((cur, index) => {
          if (post.id === cur.id) {
            this.post.splice(index, 1);
            this.isEdit = false;
            this.currentPost = {
              id: 0,
              title: '',
              body: ''
            }
          }
        })
      })
    }
  }
}