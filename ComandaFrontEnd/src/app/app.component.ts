import { Component } from '@angular/core';
import { DataShareService } from './Services/data-share.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ComandaFrontEnd';

  constructor(private share: DataShareService) {}
}
