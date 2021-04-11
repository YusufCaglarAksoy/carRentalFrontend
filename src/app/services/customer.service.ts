import { Injectable } from '@angular/core';import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Customer } from '../models/customer';
import { ResponseModel } from '../models/ResponseModel';
import { CustomerAdd } from '../models/customerAdd';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl ='https://localhost:44315/api/customers/'

  constructor(private httpClient:HttpClient) { }
  getCustomers():Observable<ListResponseModel<Customer>> {
    return this.httpClient.get<ListResponseModel<Customer>>(this.apiUrl+"getcustomers")
  }

  add(customer:CustomerAdd):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"add",customer)
  }
  update(customer:Customer):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"update",customer)
  }
  
  delete(customer:Customer):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"delete",customer)
  }
}
