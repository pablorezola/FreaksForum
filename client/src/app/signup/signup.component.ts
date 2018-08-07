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


signup(username: string, password: string, email: string, birth: Date) {
  //console.log(birth) hacer la comparación de edad
    this.sessionService.signup(username,password,email,birth).subscribe( (user:any) =>{
      //console.log(`WELCOME USER ${user.username}, register OK`);
      //console.log(user);
      if (user == null ){this.router.navigate(['/signup'])
    } else {
      this.router.navigate(['/login'])};
  });
} 

}






