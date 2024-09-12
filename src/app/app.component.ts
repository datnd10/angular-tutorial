import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { PostComponent } from './post/post.component';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { noSpaceValidator } from './validators/nospace.validators';

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

  form: any;
  formValidation: any;
  emailRegex: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  contactRegex: string = '^[0-9]{10}$';
  constructor(fb: FormBuilder) {
    // this.form = fb.group({
    //   fullname: ['', [Validators.required, Validators.minLength(5)]],
    //   email: ['', [Validators.required, Validators.email]],
    //   contactDetails: fb.group({
    //     address: ['', Validators.required],
    //     shippingAddress: ['', Validators.required],
    //     contactNo: ['', [Validators.required, Validators.pattern(this.contactRegex)]]
    //   }),

    //   skills: fb.array([])
    // })

    this.formValidation = fb.group({
      username: ['', [Validators.required, Validators.minLength(5), noSpaceValidator.noSpaceValidations]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    })


    this.form = new FormGroup({
      fullName: new FormControl('', [Validators.required, Validators.minLength(5)]),
      email: new FormControl('', [Validators.required,
      // Validators.pattern(this.emailRegex),
      Validators.email]),
      contactDetails: new FormGroup({
        address: new FormControl('', Validators.required),
        shippingAddress: new FormControl('', Validators.required),
        contactNo: new FormControl('', [Validators.required, Validators.pattern(this.contactRegex)])
      }),

      skills: new FormArray([])
    });
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


  topic: string = 'Angular Programming';
  count: number = 2822312;
  decimalCount: number = 2.2222;
  currency: number = 99.99;
  today: Date = new Date();
  postObj: object = {
    id: 1,
    post: 'Post 1'
  }
  writeArray = [
    'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'
  ]
  userDetails = {
    name: 'John',
    age: 25
  }

  dummyText: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, officia?';

  onSubmit(f: NgForm) {
    console.log(f.value);
  }

  getValue(f: any) {
    console.log(f);
  }

  get FullName() {
    return this.form.get('fullName');
  }

  get Email() {
    return this.form.get('email');
  }

  get Address() {
    return this.form.get('contactDetails.address');
  }

  get ShippingAddress() {
    return this.form.get('contactDetails.shippingAddress');
  }

  get ContactNo() {
    return this.form.get('contactDetails.contactNo');
  }


  get Skills() {
    return this.form.get('skills');
  }

  addSkills(skill: HTMLInputElement) {

    (<FormArray>this.form.get('skills')).push(new FormControl(skill.value));
    skill.value = '';
    console.log(this.form.value);

  }

  removeSkills(index: number) {
    (<FormArray>this.form.get('skills')).removeAt(index);
  }

  get fc() {
    return this.formValidation.controls;
  }

  onSubmitReactiveForm() {
    console.log(this.form.value);
  }
}
