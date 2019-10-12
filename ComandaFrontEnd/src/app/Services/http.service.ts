import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  test() {
    const HEADERS = new HttpHeaders();
    HEADERS.set('Access-Control-Allow-Origin', '*');
    HEADERS.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization');
    HEADERS.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    // HEADERS.set('Content-Type', 'application/json');
    console.log(JSON.stringify({nombre: 'admin', pass: 'sysadmin'}));
    return this.http.post('https://agustinezequielgomez.000webhostapp.com/Login/',  {nombre: 'admin', pass: 'sysadmin'},
    {headers: HEADERS});
  }
}
