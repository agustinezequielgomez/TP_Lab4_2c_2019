import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { Mesa } from '../Classes/mesa';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private http: HttpService) { }

  get(): Observable<Mesa[]> {
    return this.http.get<Mesa[]>(`${environment.API_URL}/Mesa/`).pipe(response => response);
  }

  charge(IDTable: number) {
    return this.http.post(`${environment.API_URL}/Mesa/Cobro`, {n_mesa: IDTable}).pipe(response => response);
  }

  close(IDTable: number) {
    return this.http.post(`${environment.API_URL}/Mesa/Cierre`, {n_mesa: IDTable}).pipe(response => response);
  }
}
