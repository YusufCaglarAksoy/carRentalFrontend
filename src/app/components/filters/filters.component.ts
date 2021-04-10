import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  constructor( private router: Router) { }
    brandId:string="";
    colorId:string="";

  ngOnInit(): void {
  }

  currentBrandId(event: any) {
    this.brandId=event;
  }

  currentColorId(event: any) {
    this.colorId=event;
  }

  setRoute() {
    if (this.brandId && this.colorId){
      this.router.navigate(['cars/brand/'+this.brandId+'/color/'+this.colorId]);     
    }
    else if (this.brandId){
      this.router.navigate(['cars/brand/'+this.brandId]);      
    }
    else if (this.colorId){
      this.router.navigate(['cars/color/'+this.colorId]);      
    }
    else{
      this.router.navigate(['cars/']);
    } 
  }

  clearRoute() {
    this.router.navigate(['cars/']);
  }

}
