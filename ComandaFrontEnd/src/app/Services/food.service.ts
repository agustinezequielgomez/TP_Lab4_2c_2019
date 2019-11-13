import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { Food } from '../Classes/food';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpService) { }

  getFoods(): Observable<Food[]> {
    return this.http.get<Food[]>(`${environment.API_URL}/Alimentos/`).pipe(response => response);
  }

  prepareFood(orderNumber: number, estimation: number) {
    return this.http.post(`${environment.API_URL}/Alimentos/`, {id_pedido: orderNumber, tiempo_estimado: estimation})
                          .pipe(response => response);
  }
}
