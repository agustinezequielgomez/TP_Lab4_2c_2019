import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { Log } from '../../Classes/log';
import { LogsService } from '../../Services/logs.service';

@Component({
  selector: 'app-logs-screen',
  templateUrl: './logs-screen.component.html',
  styleUrls: ['./logs-screen.component.scss']
})
export class LogsScreenComponent implements OnInit {

  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  public logs: Log[];
  public dataSource: MatTableDataSource<Log>;
  public displayColumns = ['id', 'id_usuario', 'nombre', 'fecha_ingreso'];
  public showSkeleton = true;
  constructor(private logsService: LogsService) { }

  ngOnInit() {
    this.logsService.getLogs().subscribe((logs) => {
      this.logs = logs;
      this.dataSource = new MatTableDataSource(this.logs);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.showSkeleton = false;
    });
  }

  filterTable(filterString: string) {
    this.dataSource.filter = filterString.trim().toLowerCase();
  }
}
