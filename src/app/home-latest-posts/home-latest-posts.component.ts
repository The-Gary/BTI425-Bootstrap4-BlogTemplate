import { Component, OnInit } from '@angular/core';
import { BlogPost } from 'src/content/BlogPost';
import { PostService } from '../post.service';

@Component({
  selector: 'app-home-latest-posts',
  templateUrl: './home-latest-posts.component.html',
  styles: [
  ]
})
export class HomeLatestPostsComponent implements OnInit {
  posts: Array<BlogPost> = [];
  constructor(private _postService: PostService) { }

  ngOnInit(): void {
    // populate the posts array with the latest posts using getPosts(1,null,null) then slice the first 3 posts
    this._postService.getPosts("1", null, null).subscribe(data => {
      this.posts = data.slice(0, 3);
    });
  }

}
