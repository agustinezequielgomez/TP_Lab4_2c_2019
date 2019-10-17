import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EmployeeRole } from '../Classes/register-employee-request';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {

  private TokenSubject = new BehaviorSubject<string>('');
  private UserNameSubject = new BehaviorSubject<string>('');
  private RoleSubject = new BehaviorSubject<string>('');
  private LastUrlSubject = new BehaviorSubject<string>('');
  constructor() { }

  public getToken(): string {
    return this.TokenSubject.getValue();
  }
  public setToken(token: string) {
    this.TokenSubject.next(token);
  }

  public getLastUrl(): string {
    return this.LastUrlSubject.getValue();
  }
  public setLastUrl(Url: string) {
    this.LastUrlSubject.next(Url);
  }

  public getUserName() {
    return this.UserNameSubject.value;
  }

  public setUserName(userName: string) {
    this.UserNameSubject.next(userName);
  }

  public getRole() {
    return this.RoleSubject.value;
  }

  public setRole(role: string) {
    this.RoleSubject.next(role);
  }
}
