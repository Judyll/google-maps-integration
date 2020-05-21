import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  constructor(private http: HttpClient) { }

  getLocation() {
    return this.http.get('http://api.ipapi.com/api/check?access_key=671d937f5272e9a60f5155a9c95eb34d');
  }

}
