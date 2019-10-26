import { Component, OnInit, Input } from '@angular/core';
import { DataShareService } from '../../Services/data-share.service';
import { StorageService } from '../../Services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() menuTemplate: string;
  public userName = this.storage.getSessionStorage('data').nombre;
  constructor(public storage: StorageService, private router: Router) { }

  ngOnInit() {
  }

  logOut() {
    this.storage.deleteLocalStorage('data');
    this.storage.deleteSessionStorage('data');
    this.router.navigate(['Access']);
  }
}
