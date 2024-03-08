import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  userForm:FormGroup;
  user:User=new User();

  
  isSignedUp:boolean=false
  @Output()
  eventEmitter = new EventEmitter<boolean>()

  constructor(private fb:FormBuilder,private userService:UserService,private router:Router) { }

  get userName(){
    return this.userForm.get('name')  
  }

  get email(){
    return this.userForm.get('email')
  }

  get password(){
    return this.userForm.get('password')
  }
  get phone(){
    return this.userForm.get('phone')
  }

  ngOnInit(): void {
    this.userForm=this.fb.group({
      name:['',[Validators.required, Validators.minLength(3)]],
      email:['',[Validators.required,Validators.pattern(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)]],
      password:['',[Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)]],
      phone:['',[Validators.required,Validators.pattern(/^[789]\d{9}$/)]]
    })
  }

  onSubmit(){

    this.user=this.userForm.value
    this.userService.signup(this.user)
    .subscribe(userData=>{
      console.log(userData)
    })
    this.router.navigate(['/login'])
    this.isSignedUp=true
    
  }

  signUpFlag(){
    this.eventEmitter.emit(this.isSignedUp)
  }

}
