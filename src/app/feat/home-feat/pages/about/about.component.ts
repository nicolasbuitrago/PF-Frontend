import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { About } from '../../models/about.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  about: About;

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.contentService.getAbout().subscribe((about: About) => {
      this.about = about;
    });
  }

}
