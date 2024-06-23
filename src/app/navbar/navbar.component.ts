import { Component, ElementRef, OnInit } from '@angular/core';
import { AuthUserService } from '../login/authUser.service';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  cartCount:number = 0;
  constructor(public authUser:AuthUserService,private route:Router,private el:ElementRef,private cartService:CartService) {
    setInterval(()=>{
      this.cartService.getCartItems().subscribe(cartItems=>{
        this.cartCount = cartItems.length;
       })
    },1000);
  }

  ngOnInit():void {
    this.cartService.getCartItems().subscribe(cartItems => this.cartCount = cartItems.length);
  }

  onLogout():void{
    this.authUser.onlogout();
    this.route.navigateByUrl('/home');
  }

}
