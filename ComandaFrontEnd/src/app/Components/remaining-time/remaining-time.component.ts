import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { isNull, isUndefined } from 'util';
import { OrdersService } from '../../Services/orders.service';
import { DisplaySnackBarService } from '../../Services/display-snack-bar.service';
import * as moment from 'moment';
import { Time } from '@angular/common';
import { interval } from 'rxjs';

@Component({
  selector: 'app-remaining-time',
  templateUrl: './remaining-time.component.html',
  styleUrls: ['./remaining-time.component.scss']
})
export class RemainingTimeComponent implements OnInit {

  public minutes: number;
  public seconds: number;
  public remainingTime: string;
  public tableCode = '';
  public orderCode = '';
  public gotThatTime = false;
  public fetching = false;
  constructor(public dialogRef: MatDialogRef<RemainingTimeComponent>, private orderService: OrdersService,
              private snack: DisplaySnackBarService) { }

  ngOnInit() {
  }

  disableButton() {
    return (this.tableCode.length === 0 || this.orderCode.length === 0);
  }

  getRemainingTime() {
    this.fetching = true;
    this.orderService.getRemainingTime(this.tableCode, this.orderCode).subscribe((response) => {
      this.minutes = response.i;
      this.seconds = response.s;
      this.calculateRemainingTime();
      this.gotThatTime = true;
      this.fetching = false;
    }, (err) => {
      this.snack.openSnackBar(err.error, 'warning', 2 );
      this.dialogRef.close();
    });
  }

  calculateRemainingTime() {
    interval(1000).subscribe(() => {
      this.seconds -= 1;
      if (this.seconds < 10) {
        this.remainingTime = `${this.minutes}:0${this.seconds}`;
      } else {
        this.remainingTime = `${this.minutes}:${this.seconds}`;
      }
      if (this.seconds === 0) {
        this.seconds = 60;
        this.minutes -= 1;
      }
    });
  }
}
