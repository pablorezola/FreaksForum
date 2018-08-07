import { Component, OnInit } from '@angular/core';
import {CommentService} from '../../services/comments';
import { ActivatedRoute, Router } from "../../../node_modules/@angular/router";
import { Observable } from 'rxjs';
import { SessionService } from '../../services/session';
@Component({
  selector: 'app-list-comment',
  templateUrl: './list-comment.component.html',
  styleUrls: ['./list-comment.component.css']
})
export class ListCommentComponent implements OnInit {
  comments:Observable<Array<Object>>;

  constructor(private commentService: CommentService, private router: Router,private sessionService:SessionService) { 

  }

  ngOnInit() {
    this.getComments();
  }

  getComments(){
    this.commentService.getCommentList().subscribe(comments => {
      this.comments=comments;
  })
  }

  deleteComment(id) {
    this.commentService
      .removeComment(id)
      .subscribe(() => this.getComments());
  }

}
