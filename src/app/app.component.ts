import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from '@shared/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ slideInAnimation ]
})
export class AppComponent {

  title = 'LitiaCaribe';

  getAnimationData(outlet: RouterOutlet) {
    // tslint:disable:no-string-literal
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    // tslint:enable:no-string-literal
  }
}
