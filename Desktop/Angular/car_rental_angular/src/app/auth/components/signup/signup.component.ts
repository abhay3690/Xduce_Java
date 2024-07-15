import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  isSpinning:boolean=false;
  signupForm!:FormGroup;
  constructor(private fb:FormBuilder){ }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.signupForm= this.fb.group({
      name:[null,[Validators.required]],
      email:[null,[Validators.required,Validators.email]],
      password:[null,[Validators.required]],
      checkpassword:[null,[Validators.required,this.conformationValidate]],

    })
  }
  conformationValidate= (control:FormControl):{[s:string]:boolean}=>{
    if(!control.value){
      return{required:true};
    }else if(control.value!==this.signupForm.controls['password'].value){
      return{confirm:true, error : true}
    }
    return{};
  };
  register(){
    console.log(this.signupForm.value);
  }

}
