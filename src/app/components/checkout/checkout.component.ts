import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent  implements OnInit{
  constructor(private _ActivatedRoute:ActivatedRoute,private _CartService:CartService){}
  cartId:string|null='';
  ngOnInit(): void {
this._ActivatedRoute.paramMap.subscribe({
  next:(params)=>{
    //console.log(params.get('id'))
      this.cartId=params.get('id')
  }
})
  }
orderForm:FormGroup=new FormGroup({
  details:new FormControl(''),
  phone:new FormControl(''),
  city:new FormControl(''),
})

handleForm():void{
  
console.log(this.orderForm.value)
this._CartService.checkout(this.cartId,this.orderForm.value).subscribe({
  next:(response)=>{
    console.log(response)
    if (response.status=="success"){
      window.open(response.session.url,'_self')
    }
  }
})
}
}
