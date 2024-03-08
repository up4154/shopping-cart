import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { Login } from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login:Login=new Login();
  isLoggedIn=false;
  constructor(private userService:UserService,private router:Router ) { }

  ngOnInit(): void {
  }
  checkLogin(){
    console.log(this.login)
    this.userService.login(this.login)
    .subscribe(user=>{
      if(user!=null){
        sessionStorage.setItem("username",user.name)
        this.router.navigate(['/home'])
        this.userService.setLoggedIn(true);
        console.log('login success')
      }
      else{
            this.isLoggedIn=false
      }
    })
  }

}