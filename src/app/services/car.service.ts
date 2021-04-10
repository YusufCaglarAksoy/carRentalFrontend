import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';
import { CarAdd } from '../models/carAdd';
import { ResponseModel } from '../models/ResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl ='https://localhost:44315/api/cars/'
  constructor(private httpClient:HttpClient) { } 
  
  getCars(): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'GetCarDetailDtos';
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByBrand(brandId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'GetCarsByBrandId?brandId=' + brandId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByColor(colorId: number): Observable<ListResponseModel<Car>> {
    let newpath = this.apiUrl + 'GetByColorId?colorId=' + colorId;
    return this.httpClient.get<ListResponseModel<Car>>(newpath);
  }

  getCarById(carId:number): Observable<ListResponseModel<Car>>{
    let newpath = this.apiUrl +'GetById?Id='+ carId;
    return this.httpClient.get<ListResponseModel<Car>>(newpath)
  }

  getCarsBrandAndColor(brandId:number, colorId:number): Observable<ListResponseModel<Car>>{
    let newpath = this.apiUrl +'GetCarsBrandAndColor?brandId='+brandId+'&colorId='+colorId;
    return this.httpClient.get<ListResponseModel<Car>>(newpath)
  }

  add(car:CarAdd):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"add",car);
  }
  
  update(car:Car):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"update",car)
  }
  
  delete(car:Car):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"delete",car)
  }
}
