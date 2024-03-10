import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product';
import { EcomdataService } from 'src/app/shared/services/ecomdata.service';
import { CartService } from 'src/app/shared/services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  constructor(private _EcomdataService:EcomdataService,private _CartService:CartService,private _ToastrService:ToastrService){}
  products:Product[]=[];
  searchTerm:string='';
  ngOnInit():void{
    this._EcomdataService.getAllProducts().subscribe({
      next:(response)=>{
        console.log(response);
       this.products=response.data;
      },
      });
  
}
AddCart(id:string):void{
  this._CartService.addToCart(id).subscribe({
    next:(response)=>{
      console.log(response)
      this ._ToastrService.success(response.message);
    },
    error:(err)=>{
      console.log(err)
    }
  })
}
}