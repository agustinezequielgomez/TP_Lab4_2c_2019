import { Injectable } from '@angular/core';
import { MatSnackBarConfig, MatSnackBar } from '@angular/material';
import { SnackBarTemplateComponent } from '../Components/snack-bar-template/snack-bar-template.component';

@Injectable({
  providedIn: 'root'
})
export class DisplaySnackBarService {

  constructor(private snackBar: MatSnackBar) { }

  openSnackBar(message: string, panelClass: string, template: number) {
    const CONFIG = new MatSnackBarConfig();
    CONFIG.data = {
      template: template,
      snackMessage: message
    };
    CONFIG.panelClass = [panelClass];
    CONFIG.duration = 5000;
    this.snackBar.openFromComponent(SnackBarTemplateComponent, CONFIG);
  }

}
