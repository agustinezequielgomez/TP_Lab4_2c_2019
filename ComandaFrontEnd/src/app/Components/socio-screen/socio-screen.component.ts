import { Component, OnInit } from '@angular/core';
import { DataProviderService } from '../../Services/data-provider.service';
import { StatsService } from '../../Services/stats.service';

@Component({
  selector: 'app-socio-screen',
  templateUrl: './socio-screen.component.html',
  styleUrls: ['./socio-screen.component.scss']
})
export class SocioScreenComponent implements OnInit {

  public cards: {title: string, subtitle: string, imgPath: string, callback: CallableFunction}[];
  public importes: number;
  constructor(private provider: DataProviderService, private stats: StatsService) { }

  ngOnInit() {
    this.stats.getImportesTotales().subscribe((response) => {
      this.importes = response;
    },
    (err) => {
      console.log('es un error');
      console.log(err);
    });

    this.cards = this.provider.getSocioCards;
  }

}
