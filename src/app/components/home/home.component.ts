
import { Component, OnInit } from '@angular/core';
import { EcomdataService } from 'src/app/shared/services/ecomdata.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Product } from 'src/app/shared/interfaces/product';
import { CartService } from 'src/app/shared/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { WhislistService } from 'src/app/shared/services/whislist.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
constructor(private _EcomdataService:EcomdataService,private _CartService:CartService,private _ToastrService:ToastrService,private _WhislistService:WhislistService){}
products:Product[]=[];
categories:any[]=[];
searchTerm:string='';
wishlistData:string[]=[];
mainSliderOption: OwlOptions = {
  loop: true,
  mouseDrag: false,
  touchDrag: true,
  pullDrag: false,
  autoplay:true,
  autoplayTimeout:5000,
  autoplaySpeed:1000,
  dots: true,
  navSpeed: 700,
  navText: ['', ''],
 items:1,
  nav: false,
}

removefav(prodId:string|undefined):void{
  this._WhislistService.removewishList(prodId).subscribe({
  next:(response)=>{
    console.log(response)
    this.wishlistData=response.data;
    const newproductData=this.products.filter((item:any)=>this.wishlistData.includes(item._id))
  console.log('before',newproductData)
  console.log('after',newproductData)
  this.products=newproductData;
  }
  })

}
addfav(prodId:string|undefined):void{
  this._WhislistService.addTowishList(prodId).subscribe({
  next:(response)=>{
    console.log(response)
  }
  })

}

AddCart(id:string):void{
  this._CartService.addToCart(id).subscribe({
    next:(response)=>{
      console.log(response)
      this._ToastrService.success(response.message);
    this._CartService.cartNumber.next(response.numOfCartItems)

    },
    error:(err)=>{
      console.log(err)
    }
  })
}
CategoriesSliderOption: OwlOptions = {
  loop: true,
  mouseDrag: false,
  touchDrag: true,
  autoplay:true,
  autoplayTimeout:7000,
  autoplaySpeed:1000,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    740: {
      items: 3
    },
    940: {
      items: 6
    }
  },
  nav: true
}
ngOnInit():void{
  this._EcomdataService.getAllProducts().subscribe({
    next:(response)=>{
      console.log(response);
     this.products=response.data;
    },
    });
    //get categories
    this._EcomdataService.getCatogeries().subscribe({
      next:(response)=>{
        console.log(response)
         this.categories=response.data;
      }
    });
}
}
