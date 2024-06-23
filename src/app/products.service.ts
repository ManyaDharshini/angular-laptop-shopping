import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Product } from './products/product';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl= environment.productsUrl;
  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get(this.apiUrl);
  }

}
