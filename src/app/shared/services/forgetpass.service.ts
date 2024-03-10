import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgetpassService {
  baseUrl:string=`https://ecommerce.routemisr.com/api/v1/auth/`
  constructor(private _HttpClient:HttpClient){ }
forgetPassword(userEmail:Object):Observable<any>{
  return this._HttpClient.post(this.baseUrl+`forgotPasswords`,userEmail)
}

resetCode(resetCode:Object):Observable<any>{
 // return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`,resetCode)
 return this._HttpClient.post(this.baseUrl+`verifyResetCode`,resetCode)

}

resetPassword(resetPasswordForm:object):Observable<any>{
  return this._HttpClient.put(this.baseUrl+`resetPassword`,resetPasswordForm)
}
}


