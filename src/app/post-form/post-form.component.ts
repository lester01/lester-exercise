import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Post } from '../model/Post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  @Output() newPost: EventEmitter<Post> = new EventEmitter();
  @Output() updatedPost: EventEmitter<Post> = new EventEmitter();
  @Input() currentPost: Post;
  @Input() isEdit: false;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  addPost(title, body){
    console.log(title, body);
    if (!title || !body){
      alert("Please add post");
    }
    this.postService.savePost({title, body} as Post).subscribe(post => {
      console.log(post);
      this.newPost.emit(post);
    })
  }

  updatePost(){
    this.postService.updatePost(this.currentPost,this.currentPost.id).subscribe(post => {
      this.isEdit = false;
      this.updatedPost.emit(post);
    })
  }

}