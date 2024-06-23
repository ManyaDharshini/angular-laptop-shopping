import { Injectable } from '@angular/core';
import { Product } from './products';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AdminService {

  offerStatus: boolean = false;

  private baseUrl = environment.apiUrl;
  private userUrl = environment.usersUrl;
  private productUrl = environment.productsUrl;
  private orderUrl = environment.ordersUrl;


constructor(private http:HttpClient) { 

}

startOffer(){
      this.offerStatus = true;
      localStorage.setItem('offerStatus','true');
}

endOffer(){
  this.offerStatus = false;
  localStorage.setItem('offerStatus','false');

}

getOfferStatus(): boolean {
  return this.offerStatus;
}



getUsersData(){
  return this.http.get(this.userUrl);

}

removeUser(userId:any){
  return this.http.delete(`${this.userUrl}/${userId}`);
}

getProducts(): Observable<any[]>{
  return this.http.get<any[]>(this.productUrl);
}

getProduct(productId:any): Observable<any>{
  return this.http.get(`${this.productUrl}/${productId}`);
}

updateProduct(product:any): Observable<any>{
  return this.http.put(`${this.productUrl}/${product.id}`, product)
}

updateOffer(product: any): Observable<any> {
  return this.http.patch(`${this.productUrl}/${product.id}`, product);
}

updateInitialProducts(products):Observable<any>{
  return this.http.put(this.productUrl,products);
}

addProduct(product: Product): Observable<any> {
  return this.http.post(this.productUrl, product);
}

removeProduct(productId:any){
  return this.http.delete(`${this.productUrl}/${productId}`);
}

getOrders(): Observable<any>{
  return this.http.get(this.orderUrl);
}

updateOrderStatus(orderId:number, status:string){
  const body = { orderStatus: status };
  return this.http.patch(`${this.orderUrl}/${orderId}`, body);
}

}
