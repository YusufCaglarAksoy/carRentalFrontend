import { Injectable } from '@angular/core';import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { CarImage } from '../models/carImage';
import { CarImageAdd } from '../models/carImageAdd';
import { ResponseModel } from '../models/ResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {
  apiUrl = "https://localhost:44315/api/carImages/";
  constructor(private httpClient: HttpClient) { }

  getCarImageByCarId(carId: number): Observable<ListResponseModel<CarImage>>{
    let newApiUrl = this.apiUrl + "GetByCarId?Id=" + carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newApiUrl);
  }

  add(carImageAdd:CarImageAdd): Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"add",carImageAdd);
  }
}