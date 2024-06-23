import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { PasswordValidators } from './passwordValidators';
import { UserDataService } from './userData.service';
import { usernameValidators } from './usernameValidators';
import { emailValidators } from './emailValidator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formSubmit=false;
  openPopup=false;
  router: any;
  users: any[] = [];
  emailExistsError=false;
  constructor(private fb:FormBuilder,private userData:UserDataService,router:Router) { }
  form=new FormGroup({
    username:new FormControl(),
    emailId:new FormControl(),
    mobile:new FormControl(),
    password:new FormControl(),
    confirmPassword:new FormControl()
  })
  signUpForm=this.fb.group({
    username:[,[Validators.required,Validators.pattern("^[A-Za-z][A-zaZ\\s]{2,20}$"),usernameValidators,]],
    emailId:[,[Validators.required,Validators.pattern("^[a-zA-Z0-9]+[._]{0,1}[0-9a-zA-Z]{3,}@([a-z]+).([a-z]{2,8})(.[a-z]{2,8})$"),emailValidators]],
    mobile:[,[Validators.required,Validators.pattern("^[6-9]{1}[0-9]{9}$")]],
    password:[,[Validators.required,Validators.minLength(6)]],
    confirmPassword:[,[Validators.required],],
  },
   {validator:PasswordValidators('password','confirmPassword')})
  ngOnInit() {

  }
checkEmailExists(){
  this.userData.getRegisterData().subscribe((users: any) => {
    this.users = users;
    // console.log(this.users);
  });
  const user=this.signUpForm.value;
  const existingUser = this.users.find(u => u.emailId === user.emailId);
  console.log(existingUser);
  if (existingUser) {
    this.emailExistsError=true;
    return false;
  }else{
    this.emailExistsError=false;
    return true;
  }
}


   submitRegister(){
   if(this.signUpForm.valid && this.checkEmailExists()){
    // console.log(this.signUpForm.value);
    this.userData.addRegisterData(this.signUpForm.value).subscribe(data=>{
      this.openPopup=true;
      })
    }
    else if(!this.checkEmailExists()){
      alert("please check your email id");
    }
    else{
      this.signUpForm.markAllAsTouched();
  }
}
  gotoLogin(){
    this.openPopup=false;
  }


}
