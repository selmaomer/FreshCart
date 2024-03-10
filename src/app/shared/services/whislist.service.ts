import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WhislistService {
  //headers:any={token:localStorage.getItem('eToken')};
 //eToken:any={token:localStorage.getItem('eToken')}

 baseUrl:string=`https://ecommerce.routemisr.com/api/v1/`;
  constructor(private  _HttpClient:HttpClient) { }
  addTowishList(prodId:string|undefined):Observable<any>{
     return this._HttpClient.post(this.baseUrl+`wishlist`,
     { productId: prodId}
     )}
     getwishList():Observable<any>{
      return this._HttpClient.get(this.baseUrl+`wishlist`)     
      }
      removewishList(prodId:string|undefined):Observable<any>{
        return this._HttpClient.delete(this.baseUrl+`wishlist/${prodId}`)     
        }
  }
