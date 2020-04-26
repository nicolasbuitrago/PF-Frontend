import { Component, OnInit, Input } from '@angular/core';
import { DataItem } from '../../../models/data-item.model';
import { Section } from '@shared/interfaces/section.model';
@Component({
  selector: 'app-section-img-bg',
  templateUrl: './section-img-bg.component.html',
  styleUrls: ['./section-img-bg.component.scss']
})
export class SectionImgBgComponent implements OnInit, DataItem {

  @Input() data: Section;

  constructor() { }

  ngOnInit(): void {
  }

}
