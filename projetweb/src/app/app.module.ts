import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginsignupComponent } from './loginsignup/loginsignup.component';
import { FormsModule } from '@angular/forms';
import { FromtacheComponent } from './fromtache/fromtache.component';
import { HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { TableauComponent } from './tableau/tableau.component';
import { HeaderComponent } from './header/header.component';
import { UpdateComponent } from './update/update.component';
import { CommentComponent } from './comment/comment.component';

// import { ParticipantComponent } from './participant/participant.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginsignupComponent,
    FromtacheComponent,
    HomeComponent,
    TableauComponent,
    HeaderComponent,
    UpdateComponent,
    CommentComponent
    // ParticipantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
