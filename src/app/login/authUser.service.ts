import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})
export class AuthUserService {

isLoggedIn = false;
isAdminLoggedIn = false;
loggedInUser:any;
userId='user_id';
constructor() {
  this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  console.log(this.isLoggedIn);
}

getUserId(id:any){
  localStorage.setItem(this.userId,id);
  console.log("Service id:"+this.userId);
}
setUserId(){
  const userId = localStorage.getItem(this.userId);
  return userId;
}


onLogin():void {
  this.isLoggedIn = true;
  localStorage.setItem('isLoggedIn','true');
  localStorage.setItem('isCheckout','true');


}

onlogout():void {
  const confirmation = window.confirm("Are you sure you want to logout?");
  if(confirmation){
  this.isLoggedIn = false;
  localStorage.setItem('isLoggedIn','false');
  localStorage.setItem('isCheckout','false');

  localStorage.removeItem(this.userId);
  }
}


getIsLoggedIn():boolean{
  return this.isLoggedIn;
}



}
