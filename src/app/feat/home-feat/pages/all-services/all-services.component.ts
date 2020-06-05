import { Component, OnInit } from '@angular/core';
import { Service } from '@shared/interfaces/service.model';
import { ContentService } from '@core/services/content.service';
import { ResourceType } from '@shared/interfaces/component-item.model';

@Component({
  selector: 'app-all-services',
  templateUrl: './all-services.component.html',
  styleUrls: ['./all-services.component.scss']
})
export class AllServicesComponent implements OnInit {
  services: Service[];
  // selectedServices: Service[];
  error: boolean;
  // counter = 12;

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.getServices();
  }

  getServices() {
    this.contentService.getServices().subscribe(
      (services: Service[]) => {
        this.services = this.services;
      },
      (err) => {
        this.error = true;
        console.log(err);
      }
    );
  }
}
