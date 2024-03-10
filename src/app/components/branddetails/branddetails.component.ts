import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/shared/interfaces/product';
import { EcomdataService } from 'src/app/shared/services/ecomdata.service';
@Component({
  selector: 'app-branddetails',
  templateUrl: './branddetails.component.html',
  styleUrls: ['./branddetails.component.css']
})
export class BranddetailsComponent implements OnInit{
  constructor( private _ActivatedRoute:ActivatedRoute,private _EcomdataService:EcomdataService){}

 BrandtDetails={} as Brand;
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(params)=>{
        let idProduct:any= params.get('id')
        this ._EcomdataService.getProductDetails(idProduct).subscribe({
          next:response=>{
   this.BrandtDetails=response.data;
          }
        })
       
      }
    })
  }
  }
  

