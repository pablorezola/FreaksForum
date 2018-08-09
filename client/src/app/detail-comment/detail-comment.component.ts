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
  
  constructor(public commentService: CommentService,public route:ActivatedRoute,public sessionService:SessionService) { 
    
  }

  ngOnInit() {
    this.update();
    
  }

  newReply(id) {
    this.commentService.addReply(id, this.replyInfo).subscribe( 
      () => this.update()
    );
    this.replyInfo.content = "";
  }  
  update(){
    this.route.params.subscribe( params => {
      this.commentService.getSingleComment(params.id)
      .subscribe( comment => {this.comment= comment; console.log(comment)});
    })
  }

}
