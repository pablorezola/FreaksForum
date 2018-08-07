import { Component, OnInit } from '@angular/core';
import { CommentService } from '../../services/comments';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.css']
})
export class NewCommentComponent implements OnInit {
  title: string;
  content: string;
  date: Date;
  error: string;

  constructor(private commentService: CommentService, private router: Router) { }

  ngOnInit() {
  }

  addComment(form) {
    this.commentService.addNewComemnt(form.value)
      .subscribe(
        (comment) => {
          console.log(comment);
          this.router.navigate(['/comments/list'])
        },
        (err) => this.error = err
      );
  }

}
