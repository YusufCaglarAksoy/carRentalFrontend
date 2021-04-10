import { Injectable } from '@angular/core';import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { ResponseModel } from '../models/ResponseModel';
import { RentalAdd } from '../models/rentalAdd';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl ='https://localhost:44315/api/rentals/'

  constructor(private httpClient:HttpClient) { }
  getRentals():Observable<ListResponseModel<Rental>>
  {
    return this.httpClient.get<ListResponseModel<Rental>>(this.apiUrl+"GetRentalDetails")
  }
  
  addRental(rental:RentalAdd):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"add",rental);
  }
  
  update(rental:Rental):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"update",rental)
  }
  
  delete(rental:Rental):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"delete",rental)
  }
}
