import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss']
})
export class PageTitleComponent implements OnInit {

  @Input() title: string;
  @Input() imageUrl: string;

  constructor() {
  }

  ngOnInit(): void {
    this.imageUrl = this.imageUrl || '/assets/default_title.jpg';
  }

}
