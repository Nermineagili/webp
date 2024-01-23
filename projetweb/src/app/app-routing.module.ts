import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginsignupComponent } from './loginsignup/loginsignup.component';
import { FromtacheComponent } from './fromtache/fromtache.component';
import { UpdateComponent } from './update/update.component';
import { CommentComponent } from './comment/comment.component';
// import { ParticipantComponent } from './participant/participant.component';

const routes: Routes = [
  {path: '', redirectTo: '/loginsignup', pathMatch: 'full'},
  {path:'home' , component:HomeComponent},
  {path:'fromtache',component:FromtacheComponent},
  { path: 'loginsignup', component: LoginsignupComponent },
  {path: 'update/:id', component: UpdateComponent},
  {path: 'addComment/:id', component:CommentComponent},
  // {path:  'addParticipant/:id/taskId' , component:ParticipantComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
