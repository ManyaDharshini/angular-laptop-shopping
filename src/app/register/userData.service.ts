import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn:'root'
})
export class UserDataService {
private apiUrl=environment.usersUrl;
private adminUrl=environment.adminUrl;
constructor(private client:HttpClient) { }
addRegisterData(data:any){
return this.client.post(this.apiUrl,data);
}
getRegisterData(){
  return this.client.get(this.apiUrl);
}
getAdminData(){
  return this.client.get(this.adminUrl);
}
getLoginCredentials(){
  return this.client.get('http://localhost:3000');
}
updatePassword(id:number, data:any) {
  const url = `${this.apiUrl}/${id}`;
  // console.log(url);
  return this.client.patch(url, data);
}
}
