import { Component, OnInit, Input } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { Studio } from '@shared/interfaces/studio.model';

@Component({
  selector: 'app-studios-list',
  templateUrl: './studios-list.component.html',
  styleUrls: ['./studios-list.component.scss']
})
export class StudiosListComponent implements OnInit {

  @Input() resources: Studio[];
  selectedStudios: Studio[];
  itemsPerPage = 6;

  constructor() { }

  ngOnInit(): void {
    this.selectedStudios = this.resources.slice(0, this.itemsPerPage);
  }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.selectedStudios = this.resources.slice(startItem, endItem);
  }

}
