import { Injectable } from '@angular/core';import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Brand } from '../models/brand';
import { ResponseModel } from '../models/ResponseModel';
import { BrandAdd } from '../models/brandAdd';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl ='https://localhost:44315/api/brands/'
  constructor(private httpClient: HttpClient) {}

  getBrands(): Observable<ListResponseModel<Brand>> {
    return this.httpClient.get<ListResponseModel<Brand>>(this.apiUrl+"getall");
  }

  add(brand:BrandAdd):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"add",brand);
  }
  
  update(brand:Brand):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"update",brand)
  }
  
  delete(brand:Brand):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"delete",brand)
  }
}
