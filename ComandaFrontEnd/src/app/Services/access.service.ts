import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RegisterEmployeeRequest } from '../Classes/register-employee-request';
import { Employee } from '../Classes/employee';

@Injectable({
  providedIn: 'root'
})
export class AccessService {

  constructor(private http: HttpService) { }

  getEmployees(): Observable<Employee[]> {
    console.log(`${environment.API_URL}/Empleados/?login=true`);
    return this.http.get<Employee[]>(`${environment.API_URL}/Empleados/?login=true`);
  }

  login(userName: string, password: string): Observable<string> {
    return this.http.post(`${environment.API_URL}/Login/`, {nombre: userName, pass: password});
  }

  register(request: FormData) {
    return this.http.post(`${environment.API_URL}/Register/`, request);
  }
}
