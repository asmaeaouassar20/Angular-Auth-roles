import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedIn=false;
  private userRole :'user' | 'admin' | null=null;

  constructor(private router:Router) { }

  // Méthode pour simuler la connexion
  login(username:string,password:string):boolean{
    if(username==='admin' && password==='admin'){
      this.isLoggedIn=true;
      this.userRole='admin';
      return true;
    }else if(username==='user' && password==='user'){
      this.isLoggedIn=true;
      this.userRole='user';
      return true;
    }
    return false;
  }


  // Méthode pour déconnecter l'utilisateur
  logout():void{
    this.isLoggedIn=false;
    this.userRole=null;
    this.router.navigate(['/login']);
  }

  // Méthode pour vérifier si l'utilisateur est connecté
  isAuthenticated():boolean{
    return this.isLoggedIn;
  }


  // Méthode pour obtenir le rôle de l'utilisateur
  getUserRole() : 'user' | 'admin' | null{
    return this.userRole;
  }

}
