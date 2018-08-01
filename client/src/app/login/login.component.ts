import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;
  error:string;

  constructor(private sessionService:SessionService, private router:Router) { }

  ngOnInit() {
  }
  
  login(username:string, password:string){
    console.log("login....");
    this.sessionService.login(username,password).subscribe( user => {
      console.log(user);
    });
  }

}