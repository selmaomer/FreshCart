import { Component } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';
@Component({
  selector: 'app-allorders',
  templateUrl: './allorders.component.html',
  styleUrls: ['./allorders.component.css']
})
export class AllordersComponent {
  constructor(private _CartService:CartService){}
 allorders:any[]=[];
  ngOnInit():void{
    this._CartService.getAllorders().subscribe({
      next:(response)=>{
        console.log(response.data);
           this.allorders=response.data;

      },
      });
  
}
}
