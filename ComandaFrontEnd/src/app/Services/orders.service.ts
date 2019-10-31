import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpService) { }

  makeOrder(request: FormData): Observable<string> {
    const URL = `${environment.API_URL}/Pedidos/`;
    return this.http.post(URL, request).pipe(response => response);
  }
}
