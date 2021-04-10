import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ColorAdd } from 'src/app/models/colorAdd';
import { Color } from '../../models/color';
import { ColorService } from '../../services/color.service';

@Component({
  selector: 'app-admin-color',
  templateUrl: './admin-color.component.html',
  styleUrls: ['./admin-color.component.css']
})
export class AdminColorComponent implements OnInit {

  constructor(private colorService: ColorService,
    private toastrService:ToastrService) {}
  colors:Color[]
  colorId:number

  colorName:string
  ngOnInit(): void {
    this.getColors();
  }

  getColors() {
    this.colorService.getColors().subscribe(response => {
      this.colors = response.data;
    });
  }

  getColor(color:Color){
    this.colorId=color.colorId
    this.colorName=color.colorName
  }

  add(){
    if(this.colorName== undefined){
      this.toastrService.error("Eksik bilgi girdiniz. Lütfen alanları kontrol ediniz.");
      return; 
    }
    this.colorService.add({colorName:this.colorName}).subscribe(data=>{
      this.toastrService.success(data.message)

    },error=>{
      this.toastrService.error(error.error.message);
    });
  }

  update(){
    if(this.colorName== undefined){
      this.toastrService.error("Eksik bilgi girdiniz. Lütfen alanları kontrol ediniz.");
      return; 
    }

    this.colorService.update({colorId:this.colorId,colorName:this.colorName}).subscribe(data=>{
      this.toastrService.success(data.message)
    },error=>{
      this.toastrService.error(error.error.message); 
    });
  }

  delete(){
    this.colorService.delete({colorId:this.colorId,colorName:this.colorName}).subscribe(data=>{
      this.toastrService.success(data.message)
    },error=>{
      this.toastrService.error(error.error.message)
    })
  }
}
