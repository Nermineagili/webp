import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fromtache',
  templateUrl: './fromtache.component.html',
  styleUrls: ['./fromtache.component.css']
})
export class FromtacheComponent {
constructor(private router : Router,public shared : SharedService){}
taskSchema : any = {
    titre :'',
    description : '',
    dateFin: '', 
    Proprietaire : '',
    Priorite:'',
    Etat : '',
    categorie : ''
  }

showTaskForm: boolean = false;

// toggleTaskForm(): void {
//   this.showTaskForm = !this.showTaskForm;
// }
  creerTache(){
   this.shared.createTask(this.taskSchema).subscribe(
    res=>{
      console.log("task created");
      this.router.navigate(['/home'])
    },
    err=>{
      console.log("task not created ");
      console.log(err);
      
    }
   )
    };

  

  
}
