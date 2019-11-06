import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EmployeeRole } from '../Classes/register-employee-request';
import { Menu } from '../Classes/menu';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {

  private TokenSubject = new BehaviorSubject<string>('');
  private UserNameSubject = new BehaviorSubject<string>('');
  private RoleSubject = new BehaviorSubject<string>('');
  private LastUrlSubject = new BehaviorSubject<string>('');
  private MenuSubject = new BehaviorSubject<Menu[]>(null);
  private MenuJsonSubject = new BehaviorSubject<string>(null);

  public MenuJsonObservable = this.MenuJsonSubject.asObservable();
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

  public getMenu() {
    return this.MenuSubject.value;
  }

  public setMenu(menu: Menu[]) {
    this.MenuSubject.next(menu);
  }

  public getMenuJson() {
    return this.MenuSubject.value;
  }

  public setMenuJson(menuJson: Menu[]|Menu) {
    this.MenuJsonSubject.next(JSON.stringify(menuJson));
  }
}
