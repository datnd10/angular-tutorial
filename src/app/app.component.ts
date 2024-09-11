import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'first-angular-app';
  parentTitle: string = 'parent title';
  message: string = '';
  fromChildOutput: string = '';

  @ViewChild(PostComponent) postChild: any;

  constructor() {

  }
  ngAfterViewInit(): void {
    console.log(this.postChild);
    this.message = this.postChild.childMessage;
    // throw new Error('Method not implemented.');
  }

  reciveMessage($event: any) {
    // console.log($event);

    this.fromChildOutput = $event;
  }
}
