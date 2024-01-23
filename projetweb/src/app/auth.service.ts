// auth.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;

  constructor(private router: Router) {}

  logout(): void {
    this.isLoggedIn = false;
    // Rediriger vers la page de connexion
    this.router.navigate(['/loginsignup']);
  }

  // Autres méthodes et propriétés liées à l'authentification
}
