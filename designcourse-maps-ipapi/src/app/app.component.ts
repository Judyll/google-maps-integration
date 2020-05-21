import { Component, OnInit } from '@angular/core';
import { MapsService } from './../_service/maps.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  country = '';
  lat = '';
  lng = '';
  zoom = 15;

  location: object;

  constructor(private map: MapsService) {}

  ngOnInit() {
    this.map.getLocation().subscribe((result: any) => {
      console.log('Get Location', result);
      this.lat = result.latitude;
      this.lng = result.longitude;
      this.location = result.location;
      this.country = result.country_name;
    });
  }
}
