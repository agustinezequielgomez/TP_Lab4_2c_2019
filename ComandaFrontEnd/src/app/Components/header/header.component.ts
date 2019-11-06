import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DataShareService } from '../../Services/data-share.service';
import { StorageService } from '../../Services/storage.service';
import { Router } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';
import { DataProviderService } from '../../Services/data-provider.service';
import { StatsService } from '../../Services/stats.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('menu', {static: false}) menu: MenuComponent;
  public menuTemplate: string;
  @Input() incomes;
  public userName = this.storage.getSessionStorage('data').nombre;
  constructor(public storage: StorageService, private router: Router, private stats: StatsService) { }

  ngOnInit() {
    this.menuTemplate = this.storage.getSessionStorage('data').role;
    if (this.menuTemplate === 'socio') {
      this.stats.getIncomes().subscribe((incomes) => {
        this.incomes = incomes;
      });
    }
  }

  logOut() {
    this.storage.deleteLocalStorage('data');
    this.storage.deleteSessionStorage('data');
    this.router.navigate(['Access']);
  }

  toggleMenu() {
    if (this.menu.sideNav.opened) {
      this.menu.sideNav.close();
    } else {
      this.menu.sideNav.open();
    }
  }
}
