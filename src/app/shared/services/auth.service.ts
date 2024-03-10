import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient,private _Router:Router) { }
UserData:any;
logOut():void
{localStorage.removeItem('eToken');
this._Router.navigate(['/login']);
}
saveUserData(){
  if(localStorage.getItem('eToken')!=null){
    let encodeToken:any=localStorage.getItem('eToken');
    let decodeToken=jwtDecode(encodeToken)
    this.UserData=decodeToken;
    this.UserData=decodeToken;
    console.log(decodeToken);
  }
  
}

  SetRegister(UserData:Object):Observable<any>{
      return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,UserData);
    }
    
    Setlogin(UserData:Object):Observable<any>{
      return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`,UserData);
    }
}


