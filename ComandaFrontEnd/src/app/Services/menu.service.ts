import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Menu } from '../Classes/menu';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { UpdateMenuRequest } from '../Classes/update-menu-request';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpService) { }

  getMenu(): Observable<Menu[]> {
    const URL = `${environment.API_URL}/Menu/`;
    return this.http.get<Menu[]>(URL).pipe(response => response);
  }

  updateMenuItem(request: UpdateMenuRequest) {
    const URL = `${environment.API_URL}/Menu/Modificar`;
    return this.http.post(URL, request).pipe(response => response);
  }

  newMenuItem(request: FormData): Observable<string> {
    const URL = `${environment.API_URL}/Menu/`;
    return this.http.post(URL, request).pipe(response => response);
  }
}
