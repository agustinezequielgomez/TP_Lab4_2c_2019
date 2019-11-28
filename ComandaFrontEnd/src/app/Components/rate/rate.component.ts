import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { RateService } from '../../Services/rate.service';
import { DisplaySnackBarService } from '../../Services/display-snack-bar.service';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss']
})
export class RateComponent implements OnInit {

  public renderRates = false;
  public ratings: Map<number, number> = new Map<number, number>();
  public comment = '';
  public tableCode: string;
  constructor(public dialogRef: MatDialogRef<RateComponent>, private service: RateService, private snack: DisplaySnackBarService) { }

  ngOnInit() {
  }

  init($event) {
    console.log($event);
    this.renderRates = true;
    this.tableCode = $event;
  }

  getRating(ratingID: number, ratingValue: any) {
    this.ratings.set(ratingID, ratingValue.rating);
  }

  SendRatings() {
    const REQUEST = {
      rate_mesa: this.ratings.get(1),
      rate_mozo: this.ratings.get(2),
      rate_cocinero: this.ratings.get(3),
      rate_restaurant: this.ratings.get(4),
      comentario: this.comment,
      codigo_identificacion: this.tableCode
    };
    this.service.SendRates(REQUEST).subscribe((response) => {
      this.snack.openSnackBar(response, 'success', 3);
      this.dialogRef.close();
    });
  }
}
