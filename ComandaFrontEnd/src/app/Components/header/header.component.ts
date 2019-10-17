import { Component, OnInit } from '@angular/core';
import { DataShareService } from '../../Services/data-share.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public share: DataShareService) { }

  ngOnInit() {
  }

}
