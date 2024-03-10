import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _HttpClient:HttpClient) { }
cartNumber:BehaviorSubject<number>=new BehaviorSubject(0);
// headers:any={token:localStorage.getItem('eToken')};
  //myToken:any={token:localStorage.getItem('eToken')}

  addToCart(productId:string):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/cart`,{productId:productId})
  }
  getUserCart():Observable<any>{
return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/cart`)
  }
  removeItem(productId:string):Observable<any>{
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`)
      }
    
      updateCartProduct(productId:string,newCount:number):Observable<any>{
        return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{count:newCount})
          }
      checkout(cartId:string|null,orderInfo:Object):Observable<any>{
        return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`,
       {
        shippingAddress:orderInfo
       },) 
        }
getAllorders():Observable<any>{
  return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/orders/`)
}
clearCart():Observable<any>{
  return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart`)
    }
}