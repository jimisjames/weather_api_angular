import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient){}

  getWeather(city){
    let url = "http://api.openweathermap.org/data/2.5/weather?q="+city+",us&&APPID=6bfd36c149d1328ec113ab88a0183769"
    return this._http.get(url);
  }
}
