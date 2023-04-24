import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'saikiran';
  place = 'Telangana';
  show = true;
  hide = false;
  array1 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

  afterClick(){
    console.log('its clicked')
  }
}
console.log('hi this saikiran');


