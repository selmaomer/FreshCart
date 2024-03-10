import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand, Product } from 'src/app/shared/interfaces/product';
import { EcomdataService } from 'src/app/shared/services/ecomdata.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit{
  
  constructor(private _EcomdataService:EcomdataService,private _ActivatedRoute:ActivatedRoute){}
  BarndData:Brand[]=[];
  BrandDetails:Brand={} as Brand;

  id:string|null='';

  branddet(id:string|null):void{
    this._EcomdataService.getBranddetails(id).subscribe({
      next:(response)=>{
            console.log(response)
            this.BrandDetails=response.data
    }
      })
    }
  ngOnInit(): void {
      this._EcomdataService.getBrands().subscribe({
        next:(response)=>{
          console.log(response)
          //this.barndData=response.data
          this.BarndData=response.data
        }
      })}
  }
        
    