import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Mesa } from '../Classes/mesa';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MesaService {

  constructor(private http: HttpService) { }

  getMesas(): Observable<Mesa[]> {
    return this.http.get<Mesa[]>(`${environment.API_URL}/Mesa/`);
  }
}
