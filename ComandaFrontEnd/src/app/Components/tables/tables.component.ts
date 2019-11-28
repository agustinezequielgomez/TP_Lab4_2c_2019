import { Component, OnInit } from '@angular/core';
import { TableService } from 'src/app/Services/table.service';
import { Mesa } from 'src/app/Classes/mesa';
import { DisplaySnackBarService } from '../../Services/display-snack-bar.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  public render = false;
  public tables: Mesa[];
  constructor(private tableService: TableService, private snack: DisplaySnackBarService) { }

  ngOnInit() {
    this.tableService.get().subscribe((response) => {
      this.tables = response;
      this.render = true;
    });
  }

  enableChargeButton(table: Mesa) {
    return (table.estado !== 'con cliente comiendo');
  }

  enableCloseButton(table: Mesa) {
    return (table.estado !== 'con cliente pagando');
  }

  chargeTable(id: number) {
    this.render = false;
    this.tableService.charge(id).subscribe((response) => {
      this.snack.openSnackBar(response, 'success', 3);
      this.tableService.get().subscribe((tables) => {
        this.tables = tables;
        this.render = true;
      });
    }, (err) => {
      this.snack.openSnackBar(err.error, 'warning', 1);
    });
  }

  closeTable(id: number) {
    this.render = false;
    this.tableService.close(id).subscribe((response) => {
      this.snack.openSnackBar(response, 'success', 3);
      this.tableService.get().subscribe((tables) => {
        this.tables = tables;
        this.render = true;
      });
    }, (err) => {
      this.snack.openSnackBar(err.error, 'warning', 1);
    });
  }
}
