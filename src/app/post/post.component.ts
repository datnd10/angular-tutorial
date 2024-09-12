import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  // providers: [PostService]
})
export class PostComponent implements OnInit {

  title: string = 'My Post';

  postParentMessage: string = 'Message from post parent';

  childMessage: string = 'From child component';

  outputChildMessage: string = 'Message from Child Component Via Output';

  @Input()
  fromParent: string = '';
  @Output() messageEvent = new EventEmitter<string>();


  posts: Array<any> = [];
  constructor(private postService: PostService) {
    this.posts = postService.postList;
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  sendMessage() {
    console.log('Click');
    this.messageEvent.emit(this.outputChildMessage);
  }
  addNew() {
    let newData: Post = {
      id: 4,
      title: 'post 4'
    }
    this.postService.addPost(newData);
  }
}
