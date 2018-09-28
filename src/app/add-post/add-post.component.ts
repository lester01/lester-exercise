import { Component, OnInit } from '@angular/core';
import { Post } from '../model/Post';
import { PostService } from '../post.service'

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  post: Post[];
  currentPost: Post = {
    id: 0,
    title: '',
    body: ''
  }
  isEdit: boolean = false;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  onNewPost(post: Post){
    this.post.unshift(post);
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

}