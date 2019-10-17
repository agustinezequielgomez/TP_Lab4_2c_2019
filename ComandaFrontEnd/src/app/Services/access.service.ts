import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RegisterEmployeeRequest } from '../Classes/register-employee-request';

@Injectable({
  providedIn: 'root'
})
export class AccessService {

  constructor(private http: HttpService) { }

  login(userName: string, password: string): Observable<string> {
    return this.http.post(`${environment.API_URL}/Login/`, {nombre: userName, pass: password});
  }

  register(request: FormData) {
    return this.http.post(`${environment.API_URL}/Register/`, request);
  }
}
