import { Component, OnInit, Input } from '@angular/core';
import { DataItem } from '@shared/interfaces/data-item.model';
import { NewItem } from '@app/shared/interfaces/newitem.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit, DataItem {

  @Input() resources: NewItem[];
  news: NewItem[];
  counter = 3;

  constructor() { }

  ngOnInit(): void {
    this.news = this.resources.slice(0, this.counter);
  }

  loadMore() {
    this.counter += 6;
    this.news = this.resources.slice(0, this.counter);
  }

}
