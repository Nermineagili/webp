// update.component.ts
import { Router } from '@angular/router';

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

  constructor(private router : Router ,private act: ActivatedRoute, private shared: SharedService) {}

  update() {
    this.shared.updateTask(this.id, this.taskSchema).subscribe(
      res => {
        console.log("Task updated");
        // Faire quelque chose après la mise à jour, par exemple, rediriger vers une autre page.
        this.router.navigate(['/home']);
      },
      err => {
        console.log("Task not updated ");
        console.log(err);
      }
    );
  }


  ngOnInit(): void {
    this.id = this.act.snapshot.paramMap.get('id');
    this.shared.getTaskById(this.id)
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

