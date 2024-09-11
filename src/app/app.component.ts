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

  // Binding
  note: string = 'Message from typeScript component file';
  imgUrl: string = 'https://picsum.photos/200/300';
  bool: boolean = true;
  userName: string = '';
  buttonClick() {
    console.log('Click');
  }

  // onKeyUp($event: any) {
  //   if ($event.keyCode === 13) {
  //     console.log($event);
  //   }
  // }
  onKeyUp() {
    console.log('Enter');
  }

  onKeyPress(value: string) {
    console.log(value);
  }

  onKeyEnter() {
    console.log(this.userName);
  }

  postTitle: string = '';
  postContent: string = '';
  imgPostUrl: string = '';
  postUrl: string = '';
  isBackground: boolean = false;


  // directives
  postArray: Array<string> = ['post1', 'post2', 'post3'];

  objArray: Array<any> = [{
    id: 1,
    name: 'John'
  },
  {
    id: 2,
    name: 'Jane'
  },
  {
    id: 3,
    name: 'Jack'
  }
  ]
  addNew() {
    this.objArray.push({
      id: 4,
      name: 'Jill'
    })
  }

  delete(index: number) {
    this.objArray.splice(index, 1);
  }

  stepForm: string = '';

  onClick(value: string) {
    this.stepForm = value;
  }

  isActive: boolean = true;
}
