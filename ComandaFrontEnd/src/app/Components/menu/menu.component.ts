import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatSidenav, MatIconRegistry, MatIcon } from '@angular/material';
import { StorageService } from 'src/app/Services/storage.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { faBeer, faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { DataProviderService } from '../../Services/data-provider.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @ViewChild('sideNav', {static: false}) sideNav: MatSidenav;
  @Input() template;
  @Input() incomes;
  public faBeer = faBeer;
  public clipboard = faClipboardList;
  constructor(public storage: StorageService, private router: Router, public provider: DataProviderService) { }

  ngOnInit() {

  }

  logOut() {
    this.storage.deleteLocalStorage('data');
    this.storage.deleteSessionStorage('data');
    this.router.navigate(['Access']);
  }

  openDialog() {
    this.provider.openDialog(true);
    this.sideNav.close();
  }

  openRateDialog() {
    this.provider.openDialog(false);
    this.sideNav.close();
  }

  redirect(screen: string) {
    this.sideNav.close();
    timer(150).subscribe(() => this.router.navigate([screen]));
  }
}
