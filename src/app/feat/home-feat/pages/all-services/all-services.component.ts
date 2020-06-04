import { Component, OnInit } from '@angular/core';
import { Service } from '@app/shared/interfaces/service.model';
import { ContentService } from '@app/core/services/content.service';
import { ResourceType } from '@app/shared/interfaces/component-item.model';

@Component({
  selector: 'app-all-services',
  templateUrl: './all-services.component.html',
  styleUrls: ['./all-services.component.scss']
})
export class AllServicesComponent implements OnInit {
  services: Service[];
  error: boolean;
  counter = 12;
  resourceType: string;
  viewResult: boolean;

  constructor(private contentService: ContentService) {
    this.resourceType = ResourceType.SERVICE;
  }

  ngOnInit(): void {
    /* this.getServices(); */
  }

  /* getServices() {
    this.contentService.getServices().subscribe(
      (services: Service[]) => {
        this.services = this.services;
      },
      (err) => {
        this.error = true;
        console.log(err);
      }
    );
  } */

  /* loadMore() {
    this.counter += 6;
    this.selectedNews = this.news.slice(0, this.counter);
  } */
}
