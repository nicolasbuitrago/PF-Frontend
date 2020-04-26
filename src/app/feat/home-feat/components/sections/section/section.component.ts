import { Component, OnInit, Input } from '@angular/core';

import { DataComponent } from '../../../models/data-component.model';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit, DataComponent {

  @Input() data: {title: string, text: string, link: string, img: string, left: boolean};

  constructor() { }

  ngOnInit(): void {
  }

}
