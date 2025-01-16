import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

export const roleGuard: CanActivateFn = (route, state) => {

  const authService=inject(AuthService);
  const router=inject(Router);
  
  const requiredRole = route.data['role'];
  const userRole = authService.getUserRole();

  if(userRole===requiredRole){
    return true;
  }else{
    router.navigate(['/login']);
    return false;
  }


};
