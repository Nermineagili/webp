import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginsignupComponent } from './loginsignup/loginsignup.component';
import { FromtacheComponent } from './fromtache/fromtache.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:'home' , component:HomeComponent},
  {path:'fromtache',component:FromtacheComponent},
  { path: 'loginsignup', component: LoginsignupComponent },
  {path: 'update/:id',component: UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
