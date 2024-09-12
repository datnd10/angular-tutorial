import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  // providers: [PostService]
})
export class PostListComponent implements OnInit {
  @Input()
  fromPostParent: string = '';
  constructor(private postService: PostService) {
    console.log(postService.postList);

    this.postList = postService.postList;
  }

  postList: Array<any> = [];
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
