import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../models/Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  currentPost: Post = {
    id: 0,
    title: '',
    body: ''
  };
  isEdit = false;

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  onNewPost(post: Post) {
    this.posts = [post, ...this.posts];
  }

  editPost(post: Post) {
    this.currentPost = post;
    this.isEdit = true;
  }

  onUpdatedPost(post: Post) {
    const updatedPosts = this.posts.map((curr, idx) => {
      if (post.id === curr.id) {
        // immutable way to update the post object in posts array.
        return [
          ...this.posts.slice(0, idx),
          post,
          ...this.posts.slice(idx + 1)
        ];
      }
    });
    this.isEdit = false;
    // clear form
    this.currentPost = {
      id: 0,
      title: '',
      body: ''
    };
    return updatedPosts;
  }

  deletePost(post: Post) {
    if (confirm('are you sure?')) {
      this.postsService
        .deletePost(post.id)
        .subscribe(
          () => (this.posts = this.posts.filter(p => p.id !== post.id))
        );
    }
  }
}
