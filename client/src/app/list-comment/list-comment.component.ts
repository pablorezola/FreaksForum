import { Component, OnInit } from '@angular/core';
import {CommentService} from '../../services/comments'
import { Observable } from 'rxjs';
@Component({
  selector: 'app-list-comment',
  templateUrl: './list-comment.component.html',
  styleUrls: ['./list-comment.component.css']
})
export class ListCommentComponent implements OnInit {
  threads:Observable<Array<Object>>

  constructor(private commentService: CommentService) { }

  ngOnInit() {
    this.threads = this.commentService.getCommentList();
  }

}
