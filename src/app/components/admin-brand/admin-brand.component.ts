import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Brand } from '../../models/brand';
import { BrandService } from '../../services/brand.service';

@Component({
  selector: 'app-admin-brand',
  templateUrl: './admin-brand.component.html',
  styleUrls: ['./admin-brand.component.css']
})
export class AdminBrandComponent implements OnInit {

  constructor(private brandService:BrandService,
    private toastrService:ToastrService) { }
  brands:Brand[]
  brandId:number
  brandName:string
  ngOnInit(): void {
    this.getBrands();
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }

  getBrand(brand:Brand){
    this.brandId=brand.brandId
    this.brandName=brand.brandName
  }

  add(){
    if(this.brandName== undefined){
      this.toastrService.error("Eksik bilgi girdiniz. Lütfen alanları kontrol ediniz.");
      return; 
    }
    this.brandService.add({brandName:this.brandName}).subscribe(data=>{
      this.toastrService.success(data.message)

    },error=>{
      this.toastrService.error(error.error.message);
    });
  }

  update(){
    if(this.brandName== undefined){
      this.toastrService.error("Eksik bilgi girdiniz. Lütfen alanları kontrol ediniz.");
      return; 
    }

    this.brandService.update({brandId:this.brandId,brandName:this.brandName}).subscribe(data=>{
      this.toastrService.success(data.message)
    },error=>{
      this.toastrService.error(error.error.message); 
    });
  }

  delete(){
    this.brandService.delete({brandId:this.brandId,brandName:this.brandName}).subscribe(data=>{
      this.toastrService.success(data.message)
    },error=>{
      this.toastrService.error(error.error.message)
    })
  }
}
