import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent implements OnInit {

  colors: Color[] = [];
  selectedColor:Color;
  allColor:Color;
  currentColor: Color;

  @Output() colorId = new EventEmitter<string>();

  constructor(private colorService: ColorService) {}

  ngOnInit(): void {
    this.getColors();
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }

  setCurrentColor() {
    this.colorId.emit(this.selectedColor?.colorId.toString());
  }

  allColorSelected(){
    return this.selectedColor == undefined ? true : false;
  }
}