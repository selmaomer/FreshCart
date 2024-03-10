import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import {FormControl ,FormControlOptions,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor( private _AuthService:AuthService,private _Router:Router){}
  isLoading:boolean=false;
  messgeror:string='';
  registerForm:FormGroup = new FormGroup({

    name:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z0-9-@]{6,}$/)]),
   rePassword:new FormControl(''),
    phone:new FormControl('',[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),
  },{validators:[this.confirmPassword]} as FormControlOptions);
   
  confirmPassword(group:FormGroup):void{
    const   password=group.get('password');
    const rePassword=group.get('rePassword');
  
    if(rePassword?.value==''){
      rePassword?.setErrors({required:true});
        }
  else if(password?.value != rePassword?.value){
      rePassword?.setErrors({mismath:true});
  }
    }
  handleForm():void{
   console.log(this.registerForm.value);
   if(this.registerForm.valid){
    this.isLoading=true;
    this._AuthService.SetRegister(this.registerForm.value).subscribe({
      next:(response)=>{
        this.isLoading=false;
         if(response.message==='success'){
        this._Router.navigate(['/login'])
       }
      },
      error:(err:HttpErrorResponse)=>{
        this.isLoading=false;
        console.log(err.error.message);
        this.messgeror=err.error.message;

      },
    });
   }
  }
}