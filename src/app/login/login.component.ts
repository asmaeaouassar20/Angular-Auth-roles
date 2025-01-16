import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username:string='';
  password:string='';

  constructor(private authService:AuthService,private router:Router){}

  onSubmit():void{
    if(this.authService.login(this.username,this.password)){
      const userRole=this.authService.getUserRole();
      if(userRole==='admin'){
        this.router.navigate(['/admin-dashboard']);
      }else if(userRole==='user'){
        this.router.navigate(['/user-dashboard']);
      }
    }else{
      alert('Invalid credentials')
    }
  }

}
