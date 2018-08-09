import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session';
import { GameService } from '../../services/api';


@Component({
  selector: 'app-nintendo',
  templateUrl: './nintendo.component.html',
  styleUrls: ['./nintendo.component.css']
})
export class NintendoComponent implements OnInit {
  games: any;
  constructor(public sessionService: SessionService, public Gs: GameService) { }

  ngOnInit() {
    this.Gs.isNintento().subscribe(arr3 => {
      this.games = arr3;
     })
  }

}
