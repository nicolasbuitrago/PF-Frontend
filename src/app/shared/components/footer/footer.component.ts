import { Component, OnInit } from '@angular/core';
import { ContentService } from '@core/services/content.service';
import { AppComponent } from '@app/app.component';
import { FooterInformation } from '@shared/interfaces/contact-information.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  title: string;
  content: FooterInformation;
  year = new Date().getFullYear();

  constructor(
    private contentService: ContentService,
    private appComponent: AppComponent
  ) { }

  ngOnInit(): void {
    this.title = this.appComponent.title;
    this.contentService.getFooter()
    .subscribe(
      (cont: FooterInformation) => {
        this.content = cont;
      },
      (err) => {
        console.log('Err getFooter = ' + err);
      }
    );
  }

}
