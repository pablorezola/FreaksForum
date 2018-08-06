import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../environments/environment';
import { map } from 'rxjs/operators';


@Injectable()
export class CommentService {   
BASE_URL:string = environment.BASEURL;    
options:object = {withCredentials:true};

constructor(private http:Http) { }

getCommentList(){
    return this.http.get(`${this.BASE_URL}/comments/comments`)
    .pipe(map(((res) => res.json())));
}

addNewComemnt(){

}

getSingleComment(){
    
}

addReply() {

}


}