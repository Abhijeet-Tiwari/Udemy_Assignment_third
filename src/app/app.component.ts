import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayDetails:any;
  // count:number = 1;
  buttonCountArray = [];

  toggleDetails() {
    this.displayDetails = !this.displayDetails;
    // this.buttonCountArray.push(this.buttonCountArray.length + 1);
    this.buttonCountArray.push(new Date()); 
  }

//   findIndex() {
//    return this.buttonCountArray.includes(5) === true ? 'green' : '' ;
//    // console.log(this.buttonCountArray.includes(5)); 
//  }

}
