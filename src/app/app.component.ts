import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from '@shared/animations';
import { ContentService } from '@core/services/content.service';
import { NavBarInformation } from '@shared/interfaces/contact-information.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ slideInAnimation ]
})
export class AppComponent {

  title = 'LitiaCaribe';

  constructor(private contentService: ContentService) {}

  getAnimationData(outlet: RouterOutlet) {
    // tslint:disable:no-string-literal
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    // tslint:enable:no-string-literal
  }

  getName() {
    this.contentService.getNavBar().subscribe(
      (navBar: NavBarInformation) => {
        this.title = navBar.name;
      }
    );
  }
}
