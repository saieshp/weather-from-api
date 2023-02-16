import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { WeatherService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  data: any = null;
  tempInfo: any = null;

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit(): void {
    this.getWeather();
  }

  async getWeather() {
    const awaitResp = this.weatherService.getWeather();
    const resp = await lastValueFrom(awaitResp);
    if (resp) {
      this.tempInfo = resp;
    }
    console.log(resp);
  }
}
