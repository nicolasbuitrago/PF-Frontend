import { Component, OnInit, Input } from '@angular/core';
import { DataItem } from '@shared/interfaces/data-item.model';
import { FaqItem } from '@app/shared/interfaces/faqitem.model';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit, DataItem {

  @Input() resources: FaqItem[];

  constructor() { }

  ngOnInit(): void {
  }
}
