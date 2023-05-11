import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  // baseURL='http://localhost:3000/get-weather';
  BASE_URL="https://weatherapp-r7nc.onrender.com/get-weather";

  constructor(private http:HttpClient) { }

  sendCityName(cityName:any)
  {
    //console.log(this.baseURL);
    console.log(cityName);
    return this.http.post<any>(`${this.BASE_URL}`,cityName)
  }
  

}
