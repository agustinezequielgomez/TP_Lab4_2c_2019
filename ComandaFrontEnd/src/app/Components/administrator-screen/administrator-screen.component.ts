import { Component, OnInit } from '@angular/core';
import { DataProviderService } from '../../Services/data-provider.service';

@Component({
  selector: 'app-administrator-screen',
  templateUrl: './administrator-screen.component.html',
  styleUrls: ['./administrator-screen.component.scss']
})
export class AdministratorScreenComponent implements OnInit {

  public cards: {title: string, subtitle: string, imgPath: string, callback: CallableFunction, buttonText: string}[];
  constructor(private provider: DataProviderService) { }

  ngOnInit() {
    this.cards = this.provider.getAdminCards;
  }

  hello() {
    console.log('hi');
  }

  toUserAdministration() {
    console.log('USER ADMIN');
  }
}
