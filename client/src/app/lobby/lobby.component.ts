import { Component, OnInit } from '@angular/core';
import {ChatService} from '../../services/chat.service';
import { SessionService } from '../../services/session';
@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit {

  constructor(private chatService: ChatService,private sessionService: SessionService) { }

  ngOnInit() {
    
  }

}
