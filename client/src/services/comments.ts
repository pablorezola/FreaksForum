import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../environments/environment';
import { map } from 'rxjs/operators';


@Injectable()
export class CommentService {
    BASE_URL: string = environment.BASEURL;
    options: object = { withCredentials: true };

    constructor(private http: Http) { }

    getCommentList() {
        return this.http.get(`${this.BASE_URL}/comments/`)
            .pipe(map(((res) => res.json())));
    }

    addNewComemnt(comment) {
        return this.http.post(`${this.BASE_URL}/comments/new`, comment, this.options)
            .pipe(map((res) => res.json()));

    }

    getSingleComment(id) {
        return this.http.get(`${this.BASE_URL}/comments/${id}`)
            .pipe(map((res) => res.json()));


    }

    addReply(id, reply) {
        return this.http.post(`${this.BASE_URL}/comments/${id}/replies`, { content: reply }, this.options)
            .pipe(map((res) => res.json()));

    }

    removeComment(id) {
        return this.http
          .delete(`${this.BASE_URL}/comments/${id}`)
          .pipe(map(res => res.json()));
      } 

}