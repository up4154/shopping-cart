import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs/internal/Observable';
import { Login } from './login/login';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private httpClient:HttpClient) { }

  // cart:Product[]=[]

  isLoggedIn=false;

  signup(user:User):Observable<User>{
    return this.httpClient.post<User>('http://localhost:1000/user/create',user)
  }
  
  viewAll():Observable<User[]>{
    return this.httpClient.get<User[]>('http://localhost:1000/user/get')
  }


  login(login:Login):Observable<User>{
    return this.httpClient.post<User>('http://localhost:1000/user/login',login)
  }


  setLoggedIn(value: boolean): void {
    this.isLoggedIn = value;
  }
  

 

}
 