import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators, FormBuilder} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:User
  userId:number;
  firstName:string;
  lastName:string;
  email:string;
  password:string;
  updateForm:FormGroup;
  passwordAgain:String

  constructor(private localStorageService:LocalStorageService,
    private toastrService:ToastrService,
    private formBuilder:FormBuilder,
    private authService:AuthService
    ) { }

  ngOnInit(): void {
    this.getCurrentUser()
  }
  getCurrentUser(){
    this.user=this.localStorageService.get('user')
    this.email=this.user.email
    this.firstName=this.user.firstName
    this.lastName=this.user.lastName
  }

  update() {

    if (this.email==undefined||this.firstName==undefined|| this.lastName==undefined|| this.password==undefined) {
      this.toastrService.error("Form Eksik", "Hata")
      return;
        
    }
    else {
      console.log(this.user,this.password)
        this.authService.update({email:this.email, firstName:this.firstName,lastName:this.lastName,password:this.password}).subscribe(response => {

            this.toastrService.success(response.message, "Bilgiler Güncellendi");
        }
        )
      
    }
  }
}
