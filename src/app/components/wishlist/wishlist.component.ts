import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/shared/interfaces/product';
import { CartService } from 'src/app/shared/services/cart.service';
import { EcomdataService } from 'src/app/shared/services/ecomdata.service';
import { WhislistService } from 'src/app/shared/services/whislist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
constructor(private _WhislistService:WhislistService,private _:EcomdataService,private _ToastrService:ToastrService,private _CartService:CartService){}
products:Product[]=[];
addfav(prodId:string|undefined):void{
  this._WhislistService.addTowishList(prodId).subscribe({
  next:(response)=>{
    console.log(response)
  }
  })
}

removefav(prodId:string|undefined):void{
  this._WhislistService.removewishList(prodId).subscribe({
  next:(response)=>{
    console.log(response)
  }
  })

}

AddCart(id:string):void{
  this._CartService.addToCart(id).subscribe({
    next:(response)=>{
      console.log(response)
      this ._ToastrService.success(response.message);
    this._CartService.cartNumber.next(response.numOfCartItems)

    },
    error:(err)=>{
      console.log(err)
    }
  })
}


  ngOnInit(): void {
    this._WhislistService.getwishList().subscribe({
     next:(response)=>
     this.products=response.data
    })
  }
}

