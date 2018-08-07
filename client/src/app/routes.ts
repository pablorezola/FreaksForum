import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NewCommentComponent } from './new-comment/new-comment.component';
import { ListCommentComponent } from './list-comment/list-comment.component';
import { DetailCommentComponent } from './detail-comment/detail-comment.component';
import { PrivateComponent } from './private/private.component';
import {PlaystationComponent} from './playstation/playstation.component'
import {XboxComponent} from './xbox/xbox.component';
import {NintendoComponent} from './nintendo/nintendo.component';
import {SteamComponent} from './steam/steam.component';
import {GamesComponent} from './games/games.component';

export const routes: Routes = [
    {path: 'games', component: GamesComponent},
    { path: 'comments/list', component: ListCommentComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },
    { path: 'comments/new', component: NewCommentComponent },
    { path: 'comments/:id', component: DetailCommentComponent },
    { path: 'private', component: PrivateComponent },
    { path: 'ps4', component: PlaystationComponent },
    { path: 'xbox', component: XboxComponent },
    { path: 'nintendo', component: NintendoComponent },
    { path: 'steam', component: SteamComponent }

];

