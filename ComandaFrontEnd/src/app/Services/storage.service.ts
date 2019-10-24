import { Injectable } from '@angular/core';
import { CryptoService } from './crypto.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private crypto: CryptoService) { }

  setLocalStorage(key: string, data: any) {
    localStorage.setItem(key, this.crypto.encryptObject(data));
  }

  setSessionStorage(key: string, data: any) {
    sessionStorage.setItem(key, this.crypto.encryptObject(data));
  }

  getLocalStorage(key: string) {
    if (localStorage.getItem(key) === null) {
      return '';
    }
    return this.crypto.decryptObect(localStorage.getItem(key));
  }

  getSessionStorage(key: string) {
    if (sessionStorage.getItem(key) === null) {
      return '';
    }
    return this.crypto.decryptObect(sessionStorage.getItem(key));
  }

  deleteSessionStorage(key: string) {
    sessionStorage.removeItem(key);
  }

  deleteLocalStorage(key: string) {
    localStorage.removeItem(key);
  }
}
