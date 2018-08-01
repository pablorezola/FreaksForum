import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session';
import { Router } from '../../../node_modules/@angular/router';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  title = 'Reactive Forms Demo';
  signupForm: FormGroup;

  constructor(private sessionService: SessionService, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {

    this.signupForm = this.fb.group({
      email: [null, Validators.required],
      password: [null, [Validators.required, Validators.minLength(5)]],
      phonenumber: [null]
    })
  }


  signup(username: string, password: string) {
    console.log("signup done");
    console.log(this.signupForm.status);
    console.log(this.signupForm.value);
    this.sessionService.signup(username, password).subscribe((user: any) => {
      console.log(`WELCOME USER ${user.username}, register OK`);
      console.log(user);
      this.router.navigate(['/']);
    });
  } 

}

  





