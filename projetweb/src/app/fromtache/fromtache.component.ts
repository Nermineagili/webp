import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-fromtache',
  templateUrl: './fromtache.component.html',
  styleUrls: ['./fromtache.component.css']
})
export class FromtacheComponent {
constructor(public shared : SharedService){}
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

toggleTaskForm(): void {
  this.showTaskForm = !this.showTaskForm;
}
  creerTache(){
   this.shared.createTask(this.taskSchema).subscribe(
    res=>{
      console.log("task created");
      
    },
    err=>{
      console.log("task not created ");
      
    }
   )
    };

  

  modifierTache(index: number) {
    console.log('Modifier la tâche : ', index);
  }

  supprimerTache(index: number) {
    console.log('Supprimer la tâche : ', index);
  }
}
