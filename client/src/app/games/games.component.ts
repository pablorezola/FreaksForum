import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  constructor(private sessionService:SessionService) { }

  ngOnInit() {
  }

}
