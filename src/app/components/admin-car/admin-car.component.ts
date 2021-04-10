import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Car } from '../../models/car';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-admin-car',
  templateUrl: './admin-car.component.html',
  styleUrls: ['./admin-car.component.css']
})
export class AdminCarComponent implements OnInit {

  constructor(private carService:CarService,
    private toastrService:ToastrService) { }
  cars:Car[]

  carId: number;
  carName: string;
  brandId: number;
  brandName: string;
  colorId: number;
  colorName: string;
  modelYear: number;
  dailyPrice: number;
  description: string;
  imagePath:string

  ngOnInit(): void {
    this.getCars()
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
    });
  }

  getCar(car:Car){
    console.log(car)
    this.carId=car.carId
    this.carName=car.carName
    this.brandId=car.brandId
    this.brandName=car.brandName
    this.colorId=car.colorId
    this.colorName=car.colorName
    this.modelYear=car.modelYear
    this.dailyPrice=car.dailyPrice
    this.description=car.description
  }

  add(){
    if(this.brandId == undefined ||this.colorId == undefined ||this.modelYear == undefined ||this.dailyPrice == undefined){
      this.toastrService.error("Eksik bilgi girdiniz. Lütfen alanları kontrol ediniz.");
      return; 
    }
    this.carService.add({brandId:this.brandId, colorId:this.colorId, modelYear:this.modelYear, dailyPrice:this.dailyPrice, description:this.description}).subscribe(data=>{
      this.toastrService.success(data.message)

    },error=>{
      this.toastrService.error(error.error.message);
    });
  }

  update(){
    if(this.brandId == undefined ||this.colorId == undefined ||this.modelYear == undefined ||this.dailyPrice == undefined){
      this.toastrService.error("Eksik bilgi girdiniz. Lütfen alanları kontrol ediniz.");
      return; 
    }

    this.carService.update({carId:this.carId, carName:this.carName, brandId:this.brandId, 
                            brandName:this.brandName, colorId:this.colorId, colorName:this.colorName, 
                            modelYear:this.modelYear,dailyPrice:this.dailyPrice,description:this.description, imagePath:this.imagePath}).subscribe(data=>{
      this.toastrService.success(data.message)
    },error=>{
      this.toastrService.error(error.error.message); 
    });
  }

  delete(){
    this.carService.delete({carId:this.carId, carName:this.carName, brandId:this.brandId, 
                            brandName:this.brandName, colorId:this.colorId, colorName:this.colorName, 
                            modelYear:this.modelYear,dailyPrice:this.dailyPrice,description:this.description, imagePath:this.imagePath}).subscribe(data=>{
      this.toastrService.success(data.message)
    },error=>{
      this.toastrService.error(error.error.message)
    })
  }
}
