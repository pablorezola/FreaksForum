import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;
  error:string;
  closeMessage: string = "";


  constructor(private sessionService:SessionService, private router: Router) { }
 
  
  ngOnInit() {
  }
  
  login(username:string, password:string){
    console.log(username, password)
    if(!username || !password ) { this.error = "campos obligatorios"
    } else {
      this.sessionService.login(username,password).subscribe( user => {
        console.log("login")
        console.log(user);
        if (user == null){
          this.error = "error de login"
      } else {
         this.router.navigate(['/private'])};
      });

    }
  }
  onClose() {
    this.closeMessage = "The alert has been closed";
    }

}


 
