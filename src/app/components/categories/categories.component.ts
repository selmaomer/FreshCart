import { Component, OnInit } from '@angular/core';
import { Category, Subcategory } from 'src/app/shared/interfaces/product';
import { EcomdataService } from 'src/app/shared/services/ecomdata.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{
constructor(private _EcomdataService:EcomdataService){}
categoryData:Category[]=[];
subcatogeryData:Subcategory[]=[];
getsubcatogeries(id:string|null):void{
  this._EcomdataService.getsubcategories(id).subscribe({
   next:(response)=>{
         console.log(response)
       // this.subcatogeryData=response.data
 }
    })
  }
ngOnInit(): void {
    this._EcomdataService.getCatogeries().subscribe({
      next:(response)=>{
        console.log(response)
        this.categoryData=response.data
        
      }

    })
}
}
