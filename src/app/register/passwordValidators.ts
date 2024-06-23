import { FormGroup } from "@angular/forms";
export function PasswordValidators(controlName:string,matchingName:string)
{
  return (formgroup:FormGroup)=>{
    const control=formgroup.controls[controlName];
    const matching=formgroup.controls[matchingName];
    if (
      matching.errors &&
      !matching.errors['passwordValidators']
    ) {
      return;
    }
    if(control.value!==matching.value){
      matching.setErrors({passwordValidators:true})
    }
    else{
      matching.setErrors(null)
    }
  }
}
