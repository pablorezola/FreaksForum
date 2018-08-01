import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../services/session';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FreaksForum';

  constructor(private session:SessionService, private router:Router){}

  logout(){

    this.session.logout().subscribe();
    this.router.navigate(['/'])
  }
  
}