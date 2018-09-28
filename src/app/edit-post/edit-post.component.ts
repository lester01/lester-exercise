import { Component, OnInit } from '@angular/core';
import { Post } from '../model/Post';
import { PostService } from '../post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  post: Post[];
  currentPost: Post = {
    id: 0,
    title: '',
    body: ''
  }
  isEdit: boolean = true;


  constructor(private postService: PostService, private route: ActivatedRoute) { }

  ngOnInit() {
    var id = this.route.snapshot.paramMap.get('id');
    this.postService.getPost(id).subscribe(post => {
      this.post = post;
      console.log(this.post);
    })
  }

  // editPost(post: Post, id){
  //   this.currentPost = post;
  //   this.isEdit = true;
  // }
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