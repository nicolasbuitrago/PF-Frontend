import { Component, OnInit, Input } from '@angular/core';

import { DataItem } from '@shared/interfaces/data-item.model';
import { Section } from '@shared/interfaces/section.model';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit, DataItem {

  @Input() data: Section;

  constructor() { }

  ngOnInit(): void {
  }

}
