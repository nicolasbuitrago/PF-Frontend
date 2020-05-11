import { Component, OnInit, Input } from '@angular/core';
import { DataItem } from '@shared/interfaces/data-item.model';
import { Search } from '@app/shared/interfaces/search.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, DataItem {
  @Input() data: Search;

  constructor() { }

  ngOnInit(): void {
  }

}
