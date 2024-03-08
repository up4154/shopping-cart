import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { UserService } from '../user.service';
import { CartserviceService } from '../cartservice.service';
import { flatten } from '@angular/compiler';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products:Product[]=[]
  cart: Product[] = []; 
  isLoggedIn:boolean=false

 
  constructor(private cartService: CartserviceService,private userService:UserService) { }

  ngOnInit(): void {

    this.products.push(new Product(101,'i Phone 15','/assets/moto.jpg',40000))
    this.products.push(new Product(102,'One Plus 9R','/assets/one plus 9r.jpg',60000))
    this.products.push(new Product(103,'One Plus Nord','/assets/oneplus-nord-1.jpg',20000))
    this.products.push(new Product(104,'Samsung 21','/assets/sgs21.jpg',70000))
    this.products.push(new Product(103,'One Plus Nord','/assets/oneplus-nord-1.jpg',20000))
    this.products.push(new Product(110,'i Phone 15','/assets/moto.jpg',40000))
    this.products.push(new Product(106,'One Plus 9R','/assets/one plus 9r.jpg',60000))
    this.products.push(new Product(107,'One Plus Nord','/assets/oneplus-nord-1.jpg',20000))
    this.products.push(new Product(108,'Samsung 21','/assets/sgs21.jpg',70000))
    this.products.push(new Product(110,'i Phone 15','/assets/moto.jpg',40000))
    this.products.push(new Product(106,'One Plus 9R','/assets/one plus 9r.jpg',60000))


    console.log(this.products)
  }


  addToCart(productId: number) {
    const item = this.products.find(it => it.product_id === productId);
    if(item) {
      this.cartService.addToCart(item);
      console.log(item)
    }
    // this.isLoggedIn=true
  }

  logOut(){
    this.userService.setLoggedIn(false)
    this.cartService.cartItems=[]
  }

}
