import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/products.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-editProduct',
  templateUrl: './editProduct.component.html',
  styleUrls: ['./editProduct.component.css']
})
export class EditProductComponent implements OnInit {
  productId: number;
  product: any;
  productForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private route:ActivatedRoute,
   private adminService:AdminService,private router: Router) { }

  ngOnInit() {
    
    this.productForm = this.formBuilder.group({
      category: ['', Validators.required],
      image: ['', Validators.required],
      model: ['', Validators.required],
      price: ['', Validators.required],
      originalPrice: ['', Validators.required],
      ratings: ['', Validators.required]
    });

    this.productId = +this.route.snapshot.paramMap.get('id');
    this.adminService.getProduct(this.productId).subscribe(product => {
      this.productForm.setValue({
        category: product.category,
        image: product.image,
        model: product.model,
        price: product.price,
        originalPrice: product.originalPrice,
        ratings: product.ratings
      })
    })
  }

  onSubmit(){
    if(this.productForm.valid){
    const updatedProduct = {
      id: this.productId,
      ...this.productForm.value
    };
    this.adminService.updateProduct(updatedProduct).subscribe(() => {
      alert("Product updated successfully");
      this.productForm.reset();
      this.router.navigateByUrl('/admin/products');
    });
  }
  else{
    this.productForm.markAllAsTouched();
  }
}

}
