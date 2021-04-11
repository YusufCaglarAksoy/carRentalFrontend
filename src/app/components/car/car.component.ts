import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CarService } from 'src/app/services/car.service';
import { CarImageService } from 'src/app/services/carImage.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  currentCar:Car;

  carImages:CarImage[]
  carImageBasePath = 'https://localhost:44315/Images/'
  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private toastrService:ToastrService,
    private carImageService:CarImageService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId'] && params['colorId']) {
        this.getCarsBrandAndColor(params['brandId'], params['colorId']);
      }
      else if (params["brandId"]) {
        this.getCarsByBrand(params["brandId"]);
      } 
      else if (params["colorId"]) {
        this.getCarsByColor(params["colorId"]);
      } 
      else {
        this.getCars();
      }
    });
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
    });
  }

  getCarsByBrand(brandId: number) {
    this.carService.getCarsByBrand(brandId).subscribe((response) => {
      this.cars = response.data;
    });
  }

  getCarsByColor(colorId: number) {
    this.carService.getCarsByColor(colorId).subscribe((response) => {
      this.cars = response.data;
    });
  }

  getCarsBrandAndColor(brandId:number, colorId: number) {
    this.carService.getCarsBrandAndColor(brandId, colorId).subscribe((response) => {
      this.cars = response.data;
    });
  }
  

  getCarImage(car:Car){

    if(car.imagePath){
      return car.imagePath
    }
    else{
      return 'Logo.png'
    }
  }

  selectCar(car:Car) {
    this.currentCar = car
    this.getCarImage(car)
  }

 
}