import { AbstractControl, FormGroup, ValidationErrors } from "@angular/forms";

export function usernameValidators(userControl: AbstractControl){
       const usernameRegex = /^[A-Za-z][A-zaZ\\s]{2,20}$/;
        const username: string = userControl.value;

        // if(!usernameRegex.test(username)&&username.length>1){
        //   return { invalidUsername: true };
        // }

        if(username && usernameRegex.test(username)){
            for (let i=0; i<username.length-2; i++){
                if(username[i] === username[i + 1] && username[i] === username[i + 2]){
                  return { hasRepetition: true};
                }
              } 
    }
    return null;
}
