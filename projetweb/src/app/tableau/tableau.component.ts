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
  // update(taskSchema._id : String): void{
  //   this.http.put()
  // }
}
  

