import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NewCommentComponent } from './new-comment/new-comment.component';
//import { ListCommentComponent } from './list-comment/list-comment.component';
import { DetailCommentComponent } from './detail-comment/detail-comment.component';
import { PrivateComponent } from './private/private.component';

export const routes: Routes = [
    //{ path: '', component: ListCommentComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },
    { path: 'comment/new', component: NewCommentComponent },
    { path: 'threads/:id', component: DetailCommentComponent },
    { path: 'private', component: PrivateComponent }

];

