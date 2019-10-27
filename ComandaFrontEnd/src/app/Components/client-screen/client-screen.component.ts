import { Component, OnInit } from '@angular/core';
import { DataProviderService } from '../../Services/data-provider.service';

@Component({
  selector: 'app-client-screen',
  templateUrl: './client-screen.component.html',
  styleUrls: ['./client-screen.component.scss']
})
export class ClientScreenComponent implements OnInit {

  public cards: {title: string, subtitle: string, imgPath: string, callback: CallableFunction}[];
  constructor(private provider: DataProviderService) { }

  ngOnInit() {
    this.cards = this.provider.getClientCards;
  }

}
