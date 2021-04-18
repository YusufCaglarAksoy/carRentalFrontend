import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/ResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private httpClient: HttpClient,) { }
  apiUrl ='https://localhost:44315/api/users/'

  getClaims(user:User):Observable<ListResponseModel<User>>{
    let path = this.apiUrl + 'getclaims'
    return this.httpClient.post<ListResponseModel<User>>(path, user);
  }

  getByEmail(email:string):Observable<SingleResponseModel<User>>{
    let newPath = this.apiUrl + 'getbymail?email='+email;
    return this.httpClient.post<SingleResponseModel<User>>(newPath, email);
  }

}
