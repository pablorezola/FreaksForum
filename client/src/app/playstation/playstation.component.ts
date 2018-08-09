import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session';
import { GameService } from '../../services/api';
@Component({
  selector: 'app-playstation',
  templateUrl: './playstation.component.html',
  styleUrls: ['./playstation.component.css']
})
export class PlaystationComponent implements OnInit {
  games: any;
  constructor(private sessionService: SessionService, private Gs: GameService) { }

  ngOnInit() {
    this.Gs.isPs4().subscribe(arr1 => {
      this.games = arr1;
     })
  }

}


