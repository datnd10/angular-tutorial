import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  title: string = 'My Post';

  postParentMessage: string = 'Message from post parent';

  childMessage: string = 'From child component';

  outputChildMessage: string = 'Message from Child Component Via Output';

  @Input()
  fromParent: string = '';
  @Output() messageEvent = new EventEmitter<string>();
  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  sendMessage() {
    console.log('Click');
    this.messageEvent.emit(this.outputChildMessage);
  }
}
