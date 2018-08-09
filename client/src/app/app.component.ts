import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../services/session';
interface UserObject{
  username:string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FreaksForum';

  user:UserObject;

  constructor(public sessionService:SessionService, public router:Router){
    this.user=this.sessionService.user;
  }

  logout(){

    this.sessionService.logout().subscribe();
    this.router.navigate(['/'])
  }
  
}