import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DataShareService } from '../../Services/data-share.service';
import { StorageService } from '../../Services/storage.service';
import { Router } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('menu', {static: false}) menu: MenuComponent;
  @Input() menuTemplate: string;
  @Input() importes;
  public userName = this.storage.getSessionStorage('data').nombre;
  constructor(public storage: StorageService, private router: Router) { }

  ngOnInit() {
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
