import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent {
  constructor(private shared: SharedService , private http : HttpClient) {}
  
  taskSchema : any ={};
  participants: any[] = [];
    selectedParticipantId: string = '';

  ngOnInit() : void{
    this.shared.getTask().subscribe(
      res=>{
        this.taskSchema = res ;
        console.log(res);
        
      },
      err=>{
        console.log("erreur");
        
      }
    )
    
  }
  
  deleteTask(id: any): void {
    this.shared.deleteTask(id).subscribe(
      (response) => {
        console.log('Task deleted successfully:', response);
        // Update taskSchema after successful deletion
        
      },
      (error) => {
        console.error('Error deleting task:', error);
        // Handle error scenarios
      }
    );
  }
  
}
  

