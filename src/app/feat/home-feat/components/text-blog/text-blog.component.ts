import { Component, OnInit, Input } from '@angular/core';
import { DataItem } from '@app/shared/interfaces/data-item.model';
import { New } from '@app/shared/interfaces/new.model';

@Component({
  selector: 'app-text-blog',
  templateUrl: './text-blog.component.html',
  styleUrls: ['./text-blog.component.scss']
})
export class TextBlogComponent implements OnInit, DataItem {
  @Input() resources: New[];
  news: New[];

  constructor() { }

  ngOnInit(): void {
  }

}
