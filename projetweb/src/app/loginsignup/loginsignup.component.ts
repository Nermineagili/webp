import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-loginsignup',
  templateUrl: './loginsignup.component.html',
  styleUrls: ['./loginsignup.component.css']
})
export class LoginsignupComponent {
  // signupUsers: any[] = [];
  user : any = {
    name: '',
    email: '',
    password: ''
  }
  userLog: any = {
    email: '',
    password: ''
  }

  constructor( public shared : SharedService) {}
  signUp(){
      this.shared.signUp(this.user).subscribe(
          res=>{
            console.log("niceeuuuu");
            
          },
          err=>{
            console.log("fuckk");
            
          }
      )
    }
    login(){
      this.shared.login(this.userLog).subscribe(
          res=>{
            console.log("niceeuuuu");
            
          },
          err=>{
            console.log("fuckk");
            
          }
      )
    }
  // ngOnInit(): void {
  //   const localData = localStorage.getItem('signupUsers');
  //   if (localData != null) {
  //     this.signupUsers = JSON.parse(localData);
  //   }
  // }

  // onSignUp() {
  //   this.signupUsers.push(this.signupObj);
  //   localStorage.setItem('signupUsers', JSON.stringify(this.signupUsers));
  //   this.signupObj = {
  //     username: '',
  //     email: '',
  //     password: ''
  //   };
  //   this.onSuccessLoginOrSignUp();
  //   alert('User login successfully'); // Appel de la fonction de navigation ici après l'inscription réussie
  // }

  // login() {
  //   const isUserExit = this.signupUsers.find(m => m.email == this.loginObj.email && m.password == this.loginObj.password);
  //   if (isUserExit != undefined) {
  //     alert('User login successfully');
  //     this.onSuccessLoginOrSignUp(); // Appeler la fonction de navigation ici
  //   } else {
  //     alert('Wrong credentials');
  //   }
  // }

  // onSuccessLoginOrSignUp() {
  //   this.router.navigate(['/fromtache']); // Naviguer vers la page des tâches
  // }
}
