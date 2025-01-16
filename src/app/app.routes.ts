import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { authGuard } from './guards/auth.guard';
import { roleGuard } from './guards/role.guard';

export const routes: Routes = [

    { path:'' , redirectTo:'/login' , pathMatch:'full'},
    { path:'login', component:LoginComponent},
    { 
        path:'user-dashboard' , 
        component:UserDashboardComponent,
        canActivate : [authGuard,roleGuard],
        data : { role : 'user'}
    },
    { 
        path:'admin-dashboard' , 
        component:AdminDashboardComponent,
        canActivate : [authGuard,roleGuard],
        data : {role : 'admin'}
    },
    { path:'**' , redirectTo:'/login'  }

];
