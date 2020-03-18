import { Component, OnInit, Input } from '@angular/core';
import { ItemComponent } from '../../../models/item.component.model';
@Component({
  selector: 'app-section-img-bg',
  templateUrl: './section-img-bg.component.html',
  styleUrls: ['./section-img-bg.component.scss']
})
export class SectionImgBgComponent implements OnInit, ItemComponent {

  @Input() data: {title: string, text: string, img: string};

  constructor() { }

  ngOnInit(): void {
  }

}
