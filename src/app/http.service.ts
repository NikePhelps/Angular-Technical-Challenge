import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url = 'https:/api.openweathermap.org/data/2.5/weather?q=';
  apiKey = '&appid=a100a5b248654065de8a40323422d03f'

  constructor(private _http: HttpClient) { }

  getWeather(location: string) {
    return this._http.get(this.url + location + this.apiKey)
  }
}
