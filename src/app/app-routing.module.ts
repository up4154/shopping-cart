import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { ThankYouComponent } from './thankyou/thankyou.component';
import { LoginCheckGuard } from './login-check.guard';
// import { LoginCheckGuard } from './login-check.guard';

const routes: Routes = [
  {
    path: "", redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'cart', component: CartComponent,canActivate:[LoginCheckGuard]
  },
  {
    path: 'thankyou', component: ThankYouComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
