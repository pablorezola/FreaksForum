import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session';
import { GameService } from '../../services/api';
@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  games: any;
  constructor(private sessionService: SessionService, private Gs: GameService) { }

  ngOnInit() {
  }

}
