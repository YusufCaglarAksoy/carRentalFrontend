import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Rental } from 'src/app/models/rental';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css'],
})
export class RentalComponent implements OnInit {
  rentals: Rental[] = [];
  dataLoaded = false;
  rentalId:number
  carId:number
  customerId:number;
  rentDate:Date
  returnDate:Date

 
  carName:string;
  customerName:string;
  userFirstName:string;
  userLastName:string;
 
  constructor(private rentalService: RentalService,
    private toastrService:ToastrService,) {}

  ngOnInit(): void {
    this.getRentals();
  }

  
  getRentals() {
    this.rentalService.getRentals().subscribe((response) => {
      this.rentals = response.data;
      this.dataLoaded = true;
    });
  }

  getRental(rental:Rental){
    console.log(rental.carId)
    this.rentalId=rental.rentalId
    this.carId=rental.carId
    this.customerId=rental.customerId
    this.rentDate=rental.rentDate
    this.returnDate=rental.returnDate
    this.carName=rental.carName
    this.customerName=rental.customerName
    this.userFirstName=rental.userFirstName
    this.userLastName=rental.userLastName
  }
  update(){
    if(this.returnDate == undefined || this.rentDate == undefined || this.customerId==undefined|| this.carId==undefined){
      this.toastrService.error("Eksik bilgi girdiniz. Lütfen alanları kontrol ediniz.");
      return; 
    }

    this.rentalService.update({rentalId:this.rentalId,carId:this.carId,customerId:this.customerId,rentDate:this.rentDate,
                              returnDate:this.returnDate, carName:this.carName, customerName:this.customerName,
                              userFirstName:this.userFirstName, userLastName:this.userLastName}).subscribe(data=>{
      this.toastrService.success(data.message)
    },error=>{
      this.toastrService.error(error.error.message); 
    });
  }

  delete(){
    this.rentalService.delete({rentalId:this.rentalId,carId:this.carId,customerId:this.customerId,rentDate:this.rentDate,
                              returnDate:this.returnDate, carName:this.carName, customerName:this.customerName,
                              userFirstName:this.userFirstName, userLastName:this.userLastName}).subscribe(data=>{
      this.toastrService.success(data.message)
    },error=>{
      this.toastrService.error(error.erro.message)
    })
  }
}