import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  title = 'FreaksForum';
  
  
  constructor(private sessionService: SessionService, private router: Router) { }
  
  ngOnInit() {
    
}


signup(username: string, password: string) {
    this.sessionService.signup(username,password).subscribe( (user:any) =>{
      console.log(`WELCOME USER ${user.username}, register OK`);
      console.log(user);
      this.router.navigate(['/login']);
  });
} 

}


/* signupForm: FormGroup;
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
ngOnInit
this.signupForm = new FormGroup({
  email: new FormControl(null, [Validators.required, Validators.minLength(4)]),
  password: new FormControl(null, [Validators.required, Validators.maxLength(8)]),
  phonenumber: new FormControl(null, [Validators.required])
 */



