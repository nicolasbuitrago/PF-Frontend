import { Component, OnInit } from '@angular/core';
import { Footer } from '@app/shared/interfaces/footer.model';
import { ContentService } from '@app/core/services/content.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  content: Footer;

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.contentService.getFooter().subscribe((cont: Footer) => {
      this.content = cont;
    });
  }

}
