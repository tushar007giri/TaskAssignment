import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  myForm: FormGroup | any
  weatherData: any
  country: string | undefined
  temp: string | undefined
  min: string | undefined
  max: string | undefined
  status: string | undefined
  city: string | undefined

  constructor(private fb: FormBuilder,
    private apiService: ServicesService) { }
  ngOnInit() {
    this.myForm = this.fb.group({
      cityName: new FormControl('')
    });


  }

  check=false;

  error:undefined
  sendToAPI(formValues: any) {
    //console.log(formValues);
    this.check=!this.check;
    this.apiService.sendCityName(formValues).subscribe((data) => {
      this.weatherData = data;
    },(err)=>
    {
      this.error=err.msg;
    })
  
    Object.values(this.weatherData).forEach((i: any) => {
      this.city = i.name
      this.country = i.sys.country;
      this.temp = i.main.temp;
      this.min = i.main.temp_min;
      this.max = i.main.temp_max;
      this.status = i.weather[0].main;

    })
  }


}
