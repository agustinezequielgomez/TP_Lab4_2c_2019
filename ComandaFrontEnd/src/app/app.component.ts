import { Component } from '@angular/core';
import { DataShareService } from './Services/data-share.service';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './Animations/animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation]
})
export class AppComponent {
  title = 'ComandaFrontEnd';

  constructor(private share: DataShareService) {}

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
