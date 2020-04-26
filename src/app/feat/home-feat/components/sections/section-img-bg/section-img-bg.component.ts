import { Component, OnInit, Input } from '@angular/core';
import { DataComponent } from '../../../models/data-component.model';
@Component({
  selector: 'app-section-img-bg',
  templateUrl: './section-img-bg.component.html',
  styleUrls: ['./section-img-bg.component.scss']
})
export class SectionImgBgComponent implements OnInit, DataComponent {

  @Input() data: {title: string, text: string, img: string, link: string};

  constructor() { }

  ngOnInit(): void {
  }

}
