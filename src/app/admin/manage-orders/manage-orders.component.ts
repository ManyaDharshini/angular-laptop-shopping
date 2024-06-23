import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  styleUrls: ['./manage-orders.component.css']
})
export class ManageOrdersComponent implements OnInit {
  orders:any;
  orderStatus: string;
  constructor(private adminService:AdminService) { }

  ngOnInit() {
    this.adminService.getOrders().subscribe(data =>{
    this.orders = data;
    })
  }

  updateOrderStatus(order:any){
    this.adminService.updateOrderStatus(order.id, order.orderStatus).subscribe(()=>{
      alert("Order status updated successfully");
    })
  }

}
