import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-adminProducts',
  templateUrl: './adminProducts.component.html',
  styleUrls: ['./adminProducts.component.css']
})
export class AdminProductsComponent implements OnInit {
  products:any;
  constructor(private productsService:ProductsService,private adminService:AdminService) {
    setInterval(()=>{
      this.productsService.getProducts().subscribe(data => this.products = data)
    },1000);
  }

  ngOnInit() {
    this.productsService.getProducts().subscribe(data=>{
      this.products=data;
    })
  }

  removeProduct(productId:any){
    this.adminService.removeProduct(productId).subscribe(() => {
      alert("Product removed successfully");
    });
    this.productsService.getProducts().subscribe(data=>{
      this.products=data;
    })
  }


}
