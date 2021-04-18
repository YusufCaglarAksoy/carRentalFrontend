import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  customers: Customer[] = [];
  dataLoaded = false;
  customer:Customer
  customerId:number
  userId:number
  companyName:string
  FindeksScore:number;
  filterText=""
  constructor(private customerService: CustomerService,
    private toastrService:ToastrService) {}

  ngOnInit(): void {
    this.getCustomers();
  }
  getCustomers() {
    this.customerService.getCustomers().subscribe((response) => {
      this.customers = response.data;
      this.dataLoaded = true;
    });
  }

  getCustomer(customer:Customer){
    console.log(customer)
    this.customerId=customer.customerId
    this.companyName=customer.companyName
    this.userId=customer.userId
    this.FindeksScore=customer.FindeksScore
  }

  add(){
    console.log(this.companyName,this.userId,this.FindeksScore)
    if(this.companyName== undefined||this.userId==undefined){
      this.toastrService.error("Eksik bilgi girdiniz. Lütfen alanları kontrol ediniz.");
      return; 
    }
    
    this.customerService.add({companyName:this.companyName, userId:this.userId, FindeksScore:this.FindeksScore}).subscribe(data=>{
      this.toastrService.success(data.message)

    },error=>{
      this.toastrService.error(error.error.message);
    });
  }

  update(){
    if(this.customer.companyName == undefined ){
      this.toastrService.error("Eksik bilgi girdiniz. Lütfen alanları kontrol ediniz.");
      return; 
    }

    this.customerService.update({customerId:this.customerId, userId:this.userId, companyName:this.companyName,FindeksScore:this.FindeksScore}).subscribe(data=>{
      this.toastrService.success(data.message)
    },error=>{
      this.toastrService.error(error.error.message); 
    });
  }

  delete(){
    this.customerService.delete({customerId:this.customerId, userId:this.userId, companyName:this.companyName,FindeksScore:this.FindeksScore}).subscribe(data=>{
      this.toastrService.success(data.message)
    },error=>{
      this.toastrService.error(error.error.message)
    })
  }
}