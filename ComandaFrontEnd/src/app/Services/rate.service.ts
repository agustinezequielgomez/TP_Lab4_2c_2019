import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RateService {

  constructor(private http: HttpService) { }

  RateAvailable(tableCode: string) {
    return this.http.get(`${environment.API_URL}/Rate/?mesa=${tableCode}`).pipe(response => response);
  }

  SendRates(rates: any) {
    return this.http.post(`${environment.API_URL}/Rate/`, rates).pipe(response => response);
  }
}
