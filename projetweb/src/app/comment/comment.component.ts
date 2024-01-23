import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  constructor(private router: Router, public shared: SharedService , private act : ActivatedRoute) {}

  taskSchema: any = {}
    comments:any = [{
      auteur: String,
      hour: new Date().toLocaleTimeString(),
      date: new Date(),
      commentaire: String
}]
    
  
  id: any;

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
  addComment() {
    if (!this.id) {
        console.error('Task ID is undefined. Cannot add comment.');
        return;
    }

    const commentData = {
        auteur: 'Your Auteur Value',
        hour: new Date().toLocaleTimeString(),
        date: new Date(),
        commentaire: this.comments.commentaire
    };

    this.shared.ajouterComment(this.id, commentData).subscribe(
        res => {
            console.log("Comment added successfully");
            // Handle additional logic if needed
            this.router.navigate(['/home']);
        },
        err => {
            console.error('Error adding comment:', err);
            // Handle error scenarios
        }
    );
}

}
