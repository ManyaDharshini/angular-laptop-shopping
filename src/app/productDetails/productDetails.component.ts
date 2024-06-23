import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';
import { CartService } from '../cart.service';
import { AuthUserService } from '../login/authUser.service';
@Component({
  selector: 'app-productDetails',
  templateUrl: './productDetails.component.html',
  styleUrls: ['./productDetails.component.css']
})
export class ProductDetailsComponent implements OnInit {
productList:any="";
searchFor:any="";
finalProduct:any="";
  constructor(private service:ProductsService,private route:ActivatedRoute,
    private authUser:AuthUserService,private cartService:CartService,private router:Router) { }

  ngOnInit() {
    this.service.getProducts().subscribe(data=>{
      this.productList=data;
      this.route.params.subscribe(paramdata=>{
        this.searchFor=paramdata['viewDetails'];
        for(let product of this.productList){
          if(product.model==this.searchFor){
            this.finalProduct=product;
            break;
          }
        }
      })
    })
  }
  addToCart(product: any): void {
    const cartItem = {
      productId: product.id,
      userId:this.authUser.setUserId(),
      image:product.image,
      name: product.model,
      price: product.price,
      quantity: 1,
    };
    console.log(cartItem);
    this.cartService.getCartItems().subscribe((cartItems:any)=>{
      const existingItem = cartItems.find((res:any)=>{
        return res.productId === cartItem.productId
      });
      if(!existingItem && this.authUser.isLoggedIn){
        this.cartService.addCartItem(cartItem).subscribe(() => {
          alert("Product added to the cart");
          this.router.navigate(['/cart']);
          //console.log('Item added to cart successfully');
        });
      }else if(existingItem){
        alert("Product already added to the cart");
      }
      else{
        this.router.navigate(['/cart']);
      }
    })

}


}
