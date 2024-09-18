import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isSpinning:boolean=false;
  loginForm !: FormGroup;
  constructor(private fb: FormBuilder,private authService:AuthService){  }
  ngOnInit(){
    this.loginForm =this.fb.group({
      email:["",[Validators.required,Validators.email]],
      password:["",[Validators.required]],
    })
  }
  Login(){
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe((res)=>{
      console.log(res);
    
    })
  }
}
