import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {

  constructor(private _httpService: HttpService){}
  weather = null
  ngOnInit() {
    this.getWeather()
  }

  getWeather(){
    let observable = this._httpService.getWeather("seattle")
    observable.subscribe(data => {
      this.weather = data
      this.weather["main"].temp = Math.floor((this.weather["main"].temp - 273.15) * 9/5 + 32)
      this.weather["main"].temp_max = Math.floor((this.weather["main"].temp_max - 273.15) * 9/5 + 32)
      this.weather["main"].temp_min = Math.floor((this.weather["main"].temp_min - 273.15) * 9/5 + 32)
      console.log(data)
    })
  }
}