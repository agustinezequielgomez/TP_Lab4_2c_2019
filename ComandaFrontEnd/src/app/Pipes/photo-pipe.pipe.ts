import { Pipe, PipeTransform } from '@angular/core';
import { FileUploadService } from '../Services/file-upload.service';
import { environment } from 'src/environments/environment';
import { timer, Observable, interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Pipe({
  name: 'photoPipe'
})
export class PhotoPipePipe implements PipeTransform {

  constructor(private upload: FileUploadService) {}
  transform(value: any, directory: string): any {
    console.log(directory, value);
    switch (directory) {
      case 'Users':
        return this.upload.downloadFile(`${environment.USERS_DIRECTORY}${value}`);
        break;

      case 'Orders':
        return this.upload.downloadFile(`${environment.ORDERS_DIRECTORY}${value}`);
        break;

      case 'Menu':
        return this.upload.downloadFile(`${environment.MENU_DIRECTORY}${value}`);
        break;
    }
  }

}
