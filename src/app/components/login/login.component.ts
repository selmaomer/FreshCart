import { Component } from '@angular/core';
import {FormControl ,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

  
export class LoginComponent {
  constructor( private _AuthService:AuthService,private _Router:Router){}
  errorMsg:string='';
  isLoading:boolean=false;
  loginForm:FormGroup = new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z0-9-@]{6,}$/)]),
  
})
handleForm():void{
  console.log(this.loginForm.value);
  if(this.loginForm.valid){
    this.isLoading=true;
   this._AuthService.Setlogin(this.loginForm.value).subscribe({
     next:(response)=>{
      if(response.message==='success'){
        this.isLoading=false;
        localStorage.setItem('eToken',response.token)
        //this._AuthService.saveUserData();
         console.log(response);
       this._Router.navigate(['/home'])
      }
     },
     error:(err)=>{
       console.log(err);
       this.isLoading=false;
       this.errorMsg=err.error.message;
       

     },
   });
  }
}
}