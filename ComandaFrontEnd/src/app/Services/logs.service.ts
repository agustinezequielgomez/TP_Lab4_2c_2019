import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Log } from '../Classes/log';

@Injectable({
  providedIn: 'root'
})
export class LogsService {

  constructor(private http: HttpService) { }

  getLogs(): Observable<Log[]> {
    return this.http.get<Log[]>(`${environment.API_URL}/Registros/`).pipe(response => response);
  }
}
