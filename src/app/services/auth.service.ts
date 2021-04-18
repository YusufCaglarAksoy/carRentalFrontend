import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Claims } from '../models/claims';
import { ListResponseModel } from '../models/listResponseModel';
import { Observable } from 'rxjs';
import { SingleResponseModel } from '../models/singleResponseModel';
import { LoginModel } from '../models/loginModel';
import { TokenModel } from '../models/tokenmModel';
import { UserService } from './user.service';
import { UserUpdate } from '../models/userUpdate';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = "https://localhost:44315/api/";
  constructor(private httpClient:HttpClient,
    private userService:UserService,) { }

  login(loginModel:LoginModel){
    this.userService.getByEmail(loginModel.email).subscribe(response => {
      let user = response.data
      localStorage.setItem('user', JSON.stringify(user));
    })
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+"auth/login",loginModel)
  }

  register(loginModel:LoginModel) {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl + "auth/register", loginModel);
  }

  update(user:UserUpdate) {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl + "auth/update", user);
  }
  
  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;
    }
    else{
      return false;
    }
  }

}
