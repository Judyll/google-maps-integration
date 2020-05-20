import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'academind-google-maps';
  lat = 9.325775183793283;
  lng = 123.30223638902143;
  zoom = 15;
  locationChosen = false;

  onMapClick(event) {
    console.log('Map Click', event);
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
    this.locationChosen = true;
  }
}
