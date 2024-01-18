// update.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  taskSchema: any;
  id: any;

  constructor(private act: ActivatedRoute, private _shared: SharedService) {}

  // update() {
  //   this._shared.updateTask(this.id, this.taskSchema).subscribe(
  //     res => {
  //       console.log("Task updated");
  //       // Faire quelque chose après la mise à jour, par exemple, rediriger vers une autre page.
  //     },
  //     err => {
  //       console.log("Task not updated ");
  //       console.log(err);
  //     }
  //   );
  // }
update(){}

  ngOnInit(): void {
    this.id = this.act.snapshot.paramMap.get('id');
    this._shared.getTaskById(this.id)
      .subscribe(
        res => {
          this.taskSchema = res;
        },
        err => {
          console.log(err);
        }
      );
  }
}

