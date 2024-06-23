import { AbstractControl } from "@angular/forms";

export function emailValidators(emailControl: AbstractControl){
    const emailRegex = /^[a-zA-Z0-9]+[._]{0,1}[0-9a-zA-Z]{3,}@([a-z]+).([a-z]{2,8})(.[a-z]{2,8})$/;
    const email: string = emailControl.value;
  
    // if(!emailRegex.test(email) && email.length>1){
    //   return { invalidEmail: true };
    // }

    if (!email) {
      return null; 
    }
  
      const atIndex = email.indexOf('@');
      const dotIndex = email.indexOf('.');
      const name = email.substring(0, atIndex);
      const domain = email.substring(atIndex+1, dotIndex);
      if (email && emailRegex.test(email) && name.toLowerCase().includes(domain.toLowerCase())) {
        return { emailNameError: true };
  
  }
  return null;
  }