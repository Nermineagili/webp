import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  route: ActivatedRoute | null | undefined;
  constructor(private router: Router , public authService: AuthService) {}

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
// logout() {
//   this.authService.logout();
// }
//logout() {
  //     this.authService.logout(); // Assurez-vous que cette méthode redirige l'utilisateur après la déconnexion
  //     this.router.navigate(['/login']); // Redirige l'utilisateur vers la page de connexion (ajustez le chemin selon vos besoins)
  //   }
