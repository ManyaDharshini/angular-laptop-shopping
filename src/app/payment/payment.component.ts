import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthUserService } from '../login/authUser.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  checkoutForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private route:Router,
    private cartService:CartService, private authUser: AuthUserService) { }
  cartItems: any[] = [];
  orders:any[] = [];
  ordersData:any[] = [];
  ngOnInit() {
    this.checkoutForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      cardName: ['', Validators.required],
      cardNumber: ['', Validators.required],
      cvv: ['', Validators.required],
      month: ['', Validators.required],
      year: ['', Validators.required]
    })
    this.cartService.getCartItems().subscribe(items =>{
      this.orders = items;
    });
  }
 
  checkout(){
    if(this.checkoutForm.valid){
      localStorage.setItem('isCheckout','true');
      const orderData ={
        name: this.checkoutForm.value.name,
        address: this.checkoutForm.value.address,
        city: this.checkoutForm.value.city,
        state: this.checkoutForm.value.state,
        date: new Date().toDateString(),
        time: new Date().toLocaleTimeString(),
        totalPrice: this.cartService.cartTotal,
        orderStatus: "Pending",
        userId:this.authUser.setUserId(),
        items: this.orders
      };
    this.cartService.placeOrder(orderData).subscribe(() =>{ 
      console.log("orders created")
    })
    alert("your order has been placed successfully!!");
    this.cartService.getCartItems().subscribe(items => {
      this.cartItems = items;
      this.cartItems.forEach((item: any) => {
        this.cartService.clearCart(item.id).subscribe(()=>{
          this.cartItems = [];
        });
      })

    });
    this.route.navigateByUrl('/my-orders');
  }else{
    this.checkoutForm.markAllAsTouched();
  }
  }

   
 
  
}
