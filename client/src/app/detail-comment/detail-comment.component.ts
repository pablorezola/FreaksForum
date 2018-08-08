import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session';
import { ActivatedRoute, Params } from '@angular/router';
import {CommentService} from '../../services/comments';

@Component({
  selector: 'app-detail-comment',
  templateUrl: './detail-comment.component.html',
  styleUrls: ['./detail-comment.component.css']
})
export class DetailCommentComponent implements OnInit {
  
  comment: any;

  replyInfo = {
    title: '',
    content: ''
  }
  
  constructor(private commentService: CommentService,private route:ActivatedRoute,private sessionService:SessionService) { 
    
  }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.commentService.getSingleComment(params.id)
      .subscribe( comment => this.comment= comment);
    })
    
  }

  newReply(id) {
    this.commentService.addReply(id, this.replyInfo).subscribe( 
      comment => this.comment = comment
    );
  }  


}
