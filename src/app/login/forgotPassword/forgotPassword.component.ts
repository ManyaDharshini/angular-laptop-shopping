import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserDataService } from 'src/app/register/userData.service';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotPassword',
  templateUrl: './forgotPassword.component.html',
  styleUrls: ['./forgotPassword.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  invalidUser=false;
  emailExistsError=false;
  users:any[]=[];
  constructor(private userData:UserDataService, private route:Router) { }
  forgotPswdForm=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.pattern("^([a-zA-Z0-9\.-]+)@([a-z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})$")]),
    password:new FormControl('',[Validators.required,Validators.minLength(6)])
  })
  ngOnInit() {
  }

  resetPswd(){
    const email=this.forgotPswdForm.get('email').value;
    const password=this.forgotPswdForm.get('password').value;
    this.userData.getRegisterData().subscribe((users:any)=>{
     const user=users.find((u:any)=> {
      return u.emailId === email
     });
     if(this.forgotPswdForm.value.email===""|| this.forgotPswdForm.value.password==="" ){
      this.forgotPswdForm.markAllAsTouched();
      }
      else if(user){
     this.invalidUser=false;
     const id=user.id;
     //console.log(id);
     const updatePassword={
      password: password,
      confirmPassword: password
     };
     //to update password

     this.userData.updatePassword(id,updatePassword).subscribe(response=>{
      alert("Your password has been updated successfully");
      this.route.navigateByUrl('/login');
     })
    }else if(!user){
        this.invalidUser=true;
    }
    })



}

}
