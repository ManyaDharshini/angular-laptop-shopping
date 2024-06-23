import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserDataService } from '../register/userData.service';
import { AuthUserService } from './authUser.service';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidUser=false;
  openPopup=false;
  admin:any;
  user:any;
  constructor(private route:Router,private userData:UserDataService,private authUser:AuthUserService,private cartService:CartService) { }
  loginForm=new FormGroup({
    emailId:new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z0-9]+[._]{0,1}[0-9a-zA-Z]{3,}@([a-z]+).([a-z]{2,8})(.[a-z]{2,8})$")]),
                                                                      
    password:new FormControl('',[Validators.required,Validators.minLength(6)])
  })

  ngOnInit() {
    
  }
  submitLogin(){
    //  console.log(this.loginForm.value);
    this.userLogin();
    this.adminLogin();
  }
  userLogin(){
    this.userData.getRegisterData().subscribe((users:any)=>{
      this.user = users.find((res:any)=>{
        return res.emailId === this.loginForm.value.emailId && res.password === this.loginForm.value.password
      });
    if(this.loginForm.value.emailId===""|| this.loginForm.value.password==="" ){
      this.loginForm.markAllAsTouched();
     }
     else if(this.user){
      this.invalidUser=false;
      alert("User logged in successfully");
      this.route.navigateByUrl('/home');
      this.authUser.onLogin();
      const userId=this.user.id;
      this.authUser.loggedInUser = this.user;
      //console.log("Currennt User id : "+userId);
      this.authUser.getUserId(userId);
     }
    });
  }

  adminLogin(){
     this.userData.getAdminData().subscribe((admins:any)=>{
      this.admin = admins.find((res:any)=>{
        return res.emailId === this.loginForm.value.emailId && res.password === this.loginForm.value.password
      });
      if(this.loginForm.value.emailId===""|| this.loginForm.value.password==="" ){
        this.loginForm.markAllAsTouched();
       }
       else if(this.admin){
        this.invalidUser=false;
        alert("Admin logged in successfully");
        this.route.navigateByUrl('/admin');
        this.authUser.isAdminLoggedIn=true;
        localStorage.setItem('isAdminLoggedIn','true');

       }else if(!this.admin && !this.user){
           this.invalidUser=true;
       }
    });
  }
 

}


