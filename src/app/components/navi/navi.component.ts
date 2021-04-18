import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  constructor(private authService:AuthService,
    private router:Router,
    private localStorageService:LocalStorageService) { }
  ngOnInit(): void {
    this.getCurrentUser
  }

  isAuthenticated(){
    return this.authService.isAuthenticated()
  }

  getCurrentUser(){
      return this.localStorageService.get('user')
   
  }

  logout(){
    this.localStorageService.remove("token")
    this.localStorageService.remove("user")
    this.router.navigate(["/"])
  }


}
