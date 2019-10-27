import { Component, OnInit } from '@angular/core';
import { DataProviderService } from '../../Services/data-provider.service';

@Component({
  selector: 'app-mozo-screen',
  templateUrl: './mozo-screen.component.html',
  styleUrls: ['./mozo-screen.component.scss']
})
export class MozoScreenComponent implements OnInit {

  public cards: {title: string, subtitle: string, imgPath: string, callback: CallableFunction}[];
  constructor(private provider: DataProviderService) { }

  ngOnInit() {
    this.cards = this.provider.getMozoCards;
    console.log(this.cards);
  }

}
