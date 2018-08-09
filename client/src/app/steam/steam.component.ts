import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session';
import { GameService } from '../../services/api';

@Component({
  selector: 'app-steam',
  templateUrl: './steam.component.html',
  styleUrls: ['./steam.component.css']
})
export class SteamComponent implements OnInit {
  games: any;
  constructor(public sessionService: SessionService, public Gs: GameService) { }

  ngOnInit() {
    this.Gs.isSteam().subscribe(arr4 => {
      this.games = arr4;
     })
  }

}
