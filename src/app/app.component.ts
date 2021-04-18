import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'carRental';

  check(){
    console.log(window.location.pathname)
    if(window.location.pathname==="/"||window.location.pathname==="/login"|| window.location.pathname==="/register"){
      return false;
    }
    else{
      return true
    }
  }
}
