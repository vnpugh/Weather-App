import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  zip: string = '';
  weather: any;

  constructor(private http: HttpClient) { }


  findWeather(zip: string){
    this.http.get(`http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=052f26926ae9784c2d677ca7bc5dec98&&units=imperial`)
    .subscribe(response => {
      console.log(response)
      this.weather = response
    })
  
  
  }
  

}

