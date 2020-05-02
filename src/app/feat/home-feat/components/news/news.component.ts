import { Component, OnInit, Input } from '@angular/core';
import { DataItem } from '../../models/data-item.model';
import { NewItem } from '@app/shared/interfaces/newitem.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit, DataItem {

  @Input() resources: NewItem[];

  constructor() { }

  ngOnInit(): void {
  }

}
