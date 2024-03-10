import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ForgetpassService } from 'src/app/shared/services/forgetpass.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent {
  constructor(private  _ForgetpassService:ForgetpassService,private _Router:Router){}
step1:boolean=true;
step2:boolean=false;
step3:boolean=false;
email:string='';
userMsg:string='';

forgetForm:FormGroup=new FormGroup({
email:new FormControl('')
})
resetCodeForm:FormGroup=new FormGroup({
  resetCode:new FormControl('')
})
resetPasswordForm:FormGroup=new FormGroup({
  newPassword:new FormControl('')
})
forgetPassword():void{
  let userEmail=this.forgetForm.value;//{email:value}
  this.email=userEmail.email
  this._ForgetpassService.forgetPassword(userEmail).subscribe({
next:(response)=>{
  console.log(response)
    this.userMsg=response.message;
    this.step1=false;
    this.step2=true;

},
error:(err)=>
{
  this.userMsg=err.error.message;
}
  })
  
}
resetCode():void{
  let resetCode=this.resetCodeForm.value;
  this._ForgetpassService.resetCode(resetCode).subscribe({
next:(response)=>{
  console.log(response)
   this.userMsg=response.status;
    this.step2=false;
    this.step3=true;

},
error:(err)=>
{
 this.userMsg=err.error.message;
}
  })
}


 resetPassword():void{
  let restForm=this.resetPasswordForm.value;//{newPassword}
  restForm.email=this.email;
this._ForgetpassService.resetPassword(restForm).subscribe({
  next:(response)=>{
    console.log(response)
    if(response.token){
     localStorage.setItem('etoken',response.token);
      this._Router.navigate(['/home'])
    }
  },
  error:(err)=>
{
 this.userMsg=err.error.message;
}
})
 }

}
