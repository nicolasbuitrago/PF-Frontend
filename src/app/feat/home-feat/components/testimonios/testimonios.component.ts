import { Component, OnInit, Input } from '@angular/core';

import { DataItem } from '../../models/data-item.model';
import { Testimonios } from '@shared/interfaces/testimonios.model';

@Component({
  selector: 'app-testimonios',
  templateUrl: './testimonios.component.html',
  styleUrls: ['./testimonios.component.scss']
})
export class TestimoniosComponent implements OnInit, DataItem {

  @Input() data: Testimonios;

  constructor() { }

  ngOnInit(): void {
  }

}
