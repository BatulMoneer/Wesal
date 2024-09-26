import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Wesal';
  circles = new Array(7); // Adjust the number of circles here

  onStart() {
    // Handle the start button click
    console.log('User is ready to start!');
  }
}
