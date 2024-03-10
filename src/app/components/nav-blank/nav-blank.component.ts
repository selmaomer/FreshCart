import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-nav-blank',
  templateUrl: './nav-blank.component.html',
  styleUrls: ['./nav-blank.component.css']
})
export class NavBlankComponent implements OnInit{
constructor( private _AuthService:AuthService,private _CartService:CartService){}
CartNum:number=0;
ngOnInit() {
  this._CartService.cartNumber.subscribe({
    next:(data)=>{
           this.CartNum=data
    }
  });
  this._CartService.getUserCart().subscribe({
    next:(response)=>{
    //  console.log('nav',response)
      this.CartNum=response.numOfCartItems;
    },
  })
}

logOutUser():void{
this._AuthService.logOut();
}}
