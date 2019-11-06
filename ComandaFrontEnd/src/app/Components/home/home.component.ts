import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../Services/storage.service';
import { DataProviderService } from '../../Services/data-provider.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public cards: {title: string, subtitle: string, imgPath: string, callback: CallableFunction}[];
  constructor(private storage: StorageService, private provider: DataProviderService) { }

  ngOnInit() {
    const ROLE = this.storage.getSessionStorage('data').role;
    switch (ROLE) {
      case 'administrador':
        this.cards = this.provider.getAdminCards;
        break;

      case 'mozo':
        this.cards = this.provider.getMozoCards;
        break;

      case 'bartender':
        break;

      case 'cocinero':
        this.cards = this.provider.getChefCards;
        break;

      case 'socio':
        this.cards = this.provider.getSocioCards;
        break;

      case 'cervecero':
        this.cards = this.provider.getBeerManCard;
        break;

      case 'cliente':
        this.cards = this.provider.getClientCards;
        break;
    }
  }
}
