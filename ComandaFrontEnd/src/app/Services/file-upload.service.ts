import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private storage: AngularFireStorage) { }

  uploadFile(file: File, fileName: string): Observable<number> {
    return this.storage.upload(fileName, file).percentageChanges();
  }

  downloadFile(path: string) {
    return this.storage.ref(path).getDownloadURL();
  }
}
