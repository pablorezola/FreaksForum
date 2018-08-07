import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NewCommentComponent } from './new-comment/new-comment.component';
import { DetailCommentComponent } from './detail-comment/detail-comment.component';
import { ListCommentComponent } from './list-comment/list-comment.component';
import { RouterModule } from '../../node_modules/@angular/router';
import { routes } from './routes';
import { FormsModule } from '@angular/forms';
import { SessionService } from '../services/session';
import { HttpModule } from '@angular/http';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrivateComponent } from './private/private.component';
import { GameService } from '../services/api';
import { PlaystationComponent } from './playstation/playstation.component';
import { XboxComponent } from './xbox/xbox.component';
import { NintendoComponent } from './nintendo/nintendo.component';
import { SteamComponent } from './steam/steam.component';
import {CommentService} from '../services/comments';
import { GamesComponent } from './games/games.component'



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NewCommentComponent,
    DetailCommentComponent,
    ListCommentComponent,
    PrivateComponent,
    PlaystationComponent,
    XboxComponent,
    NintendoComponent,
    SteamComponent,
    GamesComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule,
    ClarityModule,
    BrowserAnimationsModule
  ],

  providers: [
    SessionService,
    GameService,
    CommentService,
  ],
  
  bootstrap: [AppComponent],
  
})
export class AppModule { }
