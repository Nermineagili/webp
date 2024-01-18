import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  route: ActivatedRoute | null | undefined;
  constructor(private router: Router) {}

  onCreateTask() {
    // Perform create task logic
    // ...
  
    // Navigate to FromtacheComponent
    this.router.navigate(['fromtache'], { relativeTo: this.route});
  }
  onLogOut() {
    this.router.navigate(['/loginsignup']);
  }
}
