import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
   orders: any[] = [];
   isCheckout = false;
   ordersLength: number = 0;
  constructor(private cartService: CartService) {
    this.isCheckout = localStorage.getItem('isCheckout') ==='true';
   }

  ngOnInit() {
    this.getOrders();
   
  }

  getOrders(): void{
    this.cartService.getOrders().subscribe(orders=>{
      this.orders = orders
      this.ordersLength = this.orders.length;
      console.log("orders"+this.orders);
     });
  }

  convertToNumber(value: string):number{
    const number = value.replaceAll(',','');
    return Number(number);
  }

  cancelOrder(orderId: number, orderDate: string, orderTime: string){
    const orderedDate = orderDate;
    const orderedTime = orderTime;
    const currentDate = new Date().toDateString();
    const currentTime = new Date().toLocaleTimeString();

    const orderedDateTime = new Date(orderedDate + ' ' + orderedTime);
    const cancelDateTime = new Date(currentDate + ' '+ currentTime);

    const halfDay = 12*60*60*1000;
    const diff = cancelDateTime.getTime() - orderedDateTime.getTime();
    console.log(diff);
    if(diff < halfDay) {
    this.cartService.cancelOrder(orderId,'Cancelled').subscribe(()=>{
      alert("Your order has been cancelled and your paid amount will be refunded fully");
      this.getOrders();
    })
  }else{
    this.cartService.cancelOrder(orderId,'Cancelled').subscribe(()=>{
      alert("your order has been cancelled and your paid amount of 90% will be refunded");
      this.getOrders();
    })
  }
  }

}
