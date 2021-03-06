import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
})
export class BrandComponent implements OnInit {
  brands: Brand[] = [];
  selectedBrand:Brand;
  allBrand:Brand;
  currentBrand: Brand;
  filterText=""

  @Output() brandId = new EventEmitter<string>();

  constructor(private brandService: BrandService) {}

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }

  setCurrentBrand() {
    this.brandId.emit(this.selectedBrand?.brandId.toString());
  }

  allBrandSelected(){
    return this.selectedBrand == undefined ? true : false;
  }
  
}