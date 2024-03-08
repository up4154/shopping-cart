import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { CartserviceService } from '../cartservice.service';
import { UserService } from '../user.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Product[] = [];
  subtotal: number = 0;

  constructor(private cartService:CartserviceService,private userService:UserService) { }

  ngOnInit(): void {
    this.cart=
    this.checkIfSame(this.cartService.cartItems)
    this.calculateSubtotal()
  }


  checkIfSame(cart: Product[]): Product[] {
    const updatedCart: Product[] = [];

    for (const obj of cart) {
        const existingObj = updatedCart.find(o => o.product_id === obj.product_id);

        if (existingObj) {
            existingObj.product_quantity++;
        } else {
            
            updatedCart.push({ ...obj, product_quantity: 1 });
        }
    }

    return updatedCart;
}

incrementQuantity(item: Product): void {
  item.product_quantity++;
  this.calculateSubtotal();
}

decrementQuantity(item: Product): void {
  if (item.product_quantity > 1) {
    item.product_quantity--;
  }
  this.calculateSubtotal();
}

calculateSubtotal(): void {
  this.subtotal = this.cart.reduce((total, item) => total + (item.product_price * item.product_quantity), 0);
}

removeFromCart(item: Product): void {
  const index = this.cart.indexOf(item);
  if (index !== -1) {
    this.cart.splice(index, 1);
    this.calculateSubtotal();
  }
}

clearCart(){
  if(this.userService.setLoggedIn){
    this.cart=[]
  }
}
}
