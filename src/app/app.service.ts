import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
    'Access-Control-Allow-Origin': '*'
});

const options = {
  headers: headers,
};

@Injectable({ providedIn: "root" })
export class WeatherService {
  constructor(private http: HttpClient) {}

  // Added proxy path url for CORS Issue resolving
  url = "http://localhost:4200/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m";

  getWeather(): Observable<any> {
    return this.http.get<any>(this.url, options);
  }
}
