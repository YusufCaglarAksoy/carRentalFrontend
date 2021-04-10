import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';
import { RentalService } from 'src/app/services/rental.service';
import { ToastrService } from 'ngx-toastr';
import { RentalAdd } from 'src/app/models/rentalAdd';
import { PaymentService } from 'src/app/services/payment.service';
import { Payment } from 'src/app/models/payment';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  
  cars:Car[]=[]
  currentCar:Car;
  car:Car;
  dataLoaded:boolean = false;
  minDate:Date = new Date();
  carId:number
  rentTime:number;
  rentDate:Date;
  returnDate:Date;
  maxDate:Date = new Date();
  minSelected:boolean;
  customerId:number;
  cardNumber:string
  cardName:string
  CVV:number
  expirationDate:string
  success:boolean

  carImageBasePath = 'https://localhost:44315/Images/'
  constructor(private carService:CarService,
    private activatedRoute:ActivatedRoute,
    private formBuilder:FormBuilder,
    private rentalService:RentalService,
    private toastrService:ToastrService,
    private router:Router,
    private paymentService:PaymentService) { }

  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe((params) => {
      if (params["carId"]) {
        this.getCarById(params["carId"]);
      } 
    });
    this.carTocars();
  }
  carTocars(){
    for(let c of this.cars){
      this.carId=c.carId;
    }
  }
  getCarById(carId:number) {
    this.carService.getCarById(carId).subscribe((response) => {
      this.cars = response.data;
    });
  }

  getCarImage(car:Car){

    if(car.imagePath){
      return car.imagePath
    }
    else{
      return 'logo.png'
    }
  }

  selectMin(){
    this.minSelected = true;
    var date = new Date(this.rentDate);
    date.setDate(date.getDate() + 1);
    this.maxDate = date;
    this.minDate = this.rentDate;
  }

  getCarId(carId:number){
    this.carId=carId;
  }
  add(){
    console.log(this.carId,this.customerId, this.returnDate, this.returnDate)
    if(this.returnDate == undefined || this.rentDate == undefined || this.customerId==undefined){
      this.toastrService.error("Eksik bilgi girdiniz. Lütfen alanları kontrol ediniz.");
      this.success=false
      return; 
    }

    this.rentalService.addRental({carId:this.carId,rentDate:new Date(),returnDate:new Date(), customerId:this.customerId}).subscribe(data=>{
      this.toastrService.success(data.message)
      this.success=data.success
    },error=>{
      this.toastrService.error(error.error.message);
      this.success=error.success;
      
    });
  }

  checkCard(){
    console.log(this.cardNumber,this.CVV, this.cardName, this.expirationDate)
    this.paymentService.CheckCard({cardNumber:this.cardNumber, CVV:this.CVV, cardName:this.cardName, expirationDate:this.expirationDate}).subscribe(response=>{
      this.toastrService.success("Ödeme Başarılı",response.message)
      this.success= response.success
    },responseError=>{
      this.toastrService.error("Ödeme Başarısız",responseError.error.message);
      this.success= responseError.success
    })
  }
}
