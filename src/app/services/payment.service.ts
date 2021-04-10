import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Payment } from '../models/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  apiUrl ='https://localhost:44315/api/payments/CheckCard'

  constructor(private httpClient:HttpClient) { }

  CheckCard(payment:Payment):Observable<ListResponseModel<Payment>> {
    return this.httpClient.post<ListResponseModel<Payment>>(this.apiUrl,payment)
  }
}
