import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { UserService } from './user.service';
import { LoginComponent } from './login/login.component';

@Injectable({
  providedIn: 'root'
})
export class LoginCheckGuard implements CanActivate{
  constructor(private userService: UserService, private router: Router) {}

  canActivate(): boolean {
    if (this.userService.isLoggedIn) {
      return true;
    } else {
      this.router.navigate(['/login']); 
      return false;
    }
  }
  
}
