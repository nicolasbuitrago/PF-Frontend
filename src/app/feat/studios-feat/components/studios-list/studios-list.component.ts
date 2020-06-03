import { Component, OnInit, Input } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { Studio } from '@shared/interfaces/studio.model';
// import { ContentService } from '@app/core/services/content.service';
import { ResourceType } from '@app/shared/interfaces/component-item.model';

@Component({
  selector: 'app-studios-list',
  templateUrl: './studios-list.component.html',
  styleUrls: ['./studios-list.component.scss']
})
export class StudiosListComponent implements OnInit {

  @Input() resources: Studio[];
  studios: Studio[];
  selectedStudios: Studio[];
  itemsPerPage = 6;
  resourceType: string;
  viewResult: boolean;

  constructor() {
    this.resourceType = ResourceType.STUDIO;
  }

  ngOnInit(): void {
    this.studios = this.resources;
    this.selectedStudios = this.resources.slice(0, this.itemsPerPage);
  }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.selectedStudios = this.resources.slice(startItem, endItem);
  }

  searchResult(data) {
    this.viewResult = true;
    this.studios = data as Studio[];
    this.selectedStudios = this.studios.slice(0, this.itemsPerPage);
  }

  clear() {
    this.viewResult = false;
    this.studios = this.resources;
    this.selectedStudios = this.resources.slice(0, this.itemsPerPage);
  }

}
