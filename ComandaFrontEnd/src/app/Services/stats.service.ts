import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor(private http: HttpService) { }

  getIncomes(): Observable<number> {
    return this.http.get<number>(`${environment.API_URL}/Consultas/ImportesTotales`);
  }
}
