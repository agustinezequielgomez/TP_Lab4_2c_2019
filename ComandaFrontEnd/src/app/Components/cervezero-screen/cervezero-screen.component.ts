import { Component, OnInit } from '@angular/core';
import { DataProviderService } from '../../Services/data-provider.service';

@Component({
  selector: 'app-cervezero-screen',
  templateUrl: './cervezero-screen.component.html',
  styleUrls: ['./cervezero-screen.component.scss']
})
export class CervezeroScreenComponent implements OnInit {

  public cards: {title: string, subtitle: string, imgPath: string, callback: CallableFunction}[];
  constructor(private provider: DataProviderService) { }

  ngOnInit() {
    this.cards = this.provider.getBeerManCard;
  }

}
