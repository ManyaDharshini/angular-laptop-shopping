import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-add-offers',
  templateUrl: './add-offers.component.html',
  styleUrls: ['./add-offers.component.css']
})
export class AddOffersComponent implements OnInit {

  products: any[];
  initialProducts: any[]=[];
  productLength = 0;

  constructor(private adminService: AdminService,private productsService: ProductsService) { }

  ngOnInit() {
    this.adminService.getProducts().subscribe((products) =>{
      this.products = products;
      this.initialProducts = products;
      //console.log(this.initialProducts);
    })
  }

applyOffer(index:number){
  // this.products.forEach(product => {
  //   const originalPrice = Number(product.price.replaceAll(',',''));
  //   const price = originalPrice * 0.5;
  //   product.price = price.toLocaleString('en-IN', { maximumFractionDigits: 0 });
  //   product.originalPrice = originalPrice.toLocaleString('en-IN', { maximumFractionDigits: 0 });
  //  
  //   this.adminService.updateOffer(product).subscribe(()=>{
  //     //alert("updated");
  //     console.log("updated");
  //   });
  // 
  //  });
  this.adminService.startOffer();
      if(index < this.products.length){
      const product = this.products[index];
      const initialPrice = product.originalPrice;
      const originalPrice = Number(product.price.replaceAll(',',''));
      const price = originalPrice * 0.5;
      product.price = price.toLocaleString('en-IN', { maximumFractionDigits: 0 });
      product.originalPrice = originalPrice.toLocaleString('en-IN', { maximumFractionDigits: 0 });
      this.adminService.updateOffer(product).subscribe(()=>{
        //alert("updated");
        console.log("updated");
        this.applyOffer(index+1);
      });

      setTimeout(()=>{
       // console.log("offer ends");
        this.adminService.endOffer();
        if(this.productLength < this.products.length){
        const product = this.products[index];
        product.price = product.originalPrice;
        product.originalPrice = initialPrice;
        this.adminService.updateOffer(product).subscribe(()=>{
           //console.log("Updated initial products");
           this.productLength++;
        });
        }
      },9000); //for 30 mins => 30*60*1000
      

    }

   
    
  
  }

  


}
