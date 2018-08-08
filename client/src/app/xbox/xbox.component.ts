import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session';
import { GameService } from '../../services/api';
@Component({
  selector: 'app-xbox',
  templateUrl: './xbox.component.html',
  styleUrls: ['./xbox.component.css']
})
export class XboxComponent implements OnInit {
  games: any;
  constructor(private sessionService:SessionService, public Gs:GameService) { }

  ngOnInit() {
    this.Gs.isXbox().subscribe(arr2=>{
      this.games = arr2.body;
      console.log(arr2.body)
     })
  }

}
