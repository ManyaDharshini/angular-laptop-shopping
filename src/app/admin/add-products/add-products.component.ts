import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../products';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  productForm: FormGroup;


  constructor(private formBuilder: FormBuilder, private productService: AdminService ) { }


  ngOnInit() {
    this.productForm = this.formBuilder.group({
      category: ['', [Validators.required, Validators.pattern("^[A-Za-z][A-Za-z\\s]{2,20}$")]],
      image: ['', Validators.required],
      model: ['', Validators.required],
      price: ['', Validators.required],
      originalPrice: ['', Validators.required],
      ratings: ['', Validators.required]
    });
  }
  
  onSubmit() {
   
    if(this.productForm.valid){
    const product: Product = this.productForm.value;
    this.productService.addProduct(product).subscribe(() => {
    console.log(product);
    alert("Product added successfully");
    this.productForm.reset();
    // Product added successfully
    },
    error => {
      console.error('Submission error:', error);
    });
   }
    else {
      this.productForm.markAllAsTouched();
    }
  }
  
}


