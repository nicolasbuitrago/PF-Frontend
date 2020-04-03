import { Component, OnInit } from '@angular/core';
import { Footer } from '@app/shared/interfaces/footer.model';
import { ContentService } from '@app/core/services/content.service';
import { AppComponent } from '@app/app.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  title: string;
  content: Footer;

  constructor(
    private contentService: ContentService,
    private appComponent: AppComponent
  ) { }

  ngOnInit(): void {
    this.title = this.appComponent.title;
    this.contentService.getFooter().subscribe((cont: Footer) => {
      this.content = cont;
    });
  }

}
