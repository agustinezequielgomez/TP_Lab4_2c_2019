import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { GenerateOrderResponse } from '../Classes/generate-order-response';
import { Pedido } from '../Classes/pedido';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private URL = `${environment.API_URL}/Pedidos/`;
  constructor(private http: HttpService) { }

  makeOrder(request: FormData): Observable<GenerateOrderResponse> {
    return this.http.post(this.URL, request).pipe(response => response);
  }

  getOrders(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(this.URL).pipe(response => response);
  }

  deliverOrder(orderNumber: number): Observable<string> {
    return this.http.post(`${this.URL}Entregar`, {id_pedido: orderNumber}).pipe(response => response);
  }

  cancelOrder(orderNumber: number): Observable<string> {
    return this.http.post(`${this.URL}Cancelar`, {id_pedido: orderNumber}).pipe(response => response);
  }

  getRemainingTime(tableCode: string, orderCode: string) {
    return this.http.get(`${this.URL}TiempoEstimado?codigo_de_pedido=${orderCode}&codigo_mesa=${tableCode}`).pipe(response => response);
  }
}
