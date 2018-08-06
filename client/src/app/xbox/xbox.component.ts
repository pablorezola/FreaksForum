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
  constructor(private sessionService:SessionService, private Gs:GameService) { }

  ngOnInit() {
    this.Gs.isXbox().subscribe(res=>this.games=res)
  }

}
