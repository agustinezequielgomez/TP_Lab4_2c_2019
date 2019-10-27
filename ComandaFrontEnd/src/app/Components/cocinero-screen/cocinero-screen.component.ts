import { Component, OnInit } from '@angular/core';
import { DataProviderService } from '../../Services/data-provider.service';

@Component({
  selector: 'app-cocinero-screen',
  templateUrl: './cocinero-screen.component.html',
  styleUrls: ['./cocinero-screen.component.scss']
})
export class CocineroScreenComponent implements OnInit {

  public cards: {title: string, subtitle: string, imgPath: string, callback: CallableFunction}[];
  constructor(private provider: DataProviderService) { }

  ngOnInit() {
    this.cards = this.provider.getChefCards;
  }

}
