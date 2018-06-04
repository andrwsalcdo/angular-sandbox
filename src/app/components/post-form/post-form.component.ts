import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../models/Post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  post: Post;
  @Output() newPost: EventEmitter<Post> = new EventEmitter();

  constructor(private postsService: PostsService) {}

  ngOnInit() {}

  addPost(title, body) {
    if (!title || !body) {
      alert('please add text');
    } else {
      this.postsService.savePost({ title, body } as Post).subscribe(post => {
        this.newPost.emit(post);
      });
    }
  }
}
