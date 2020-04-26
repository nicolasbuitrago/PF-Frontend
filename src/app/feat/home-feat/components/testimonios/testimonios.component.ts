import { Component, OnInit, Input } from '@angular/core';

import { Testimonio } from '@shared/interfaces/testimonio.model';
import { DataItem } from '../../models/data-item.model';

@Component({
  selector: 'app-testimonios',
  templateUrl: './testimonios.component.html',
  styleUrls: ['./testimonios.component.scss']
})
export class TestimoniosComponent implements OnInit {

  @Input() data: Testimonio[];

  constructor() { }

  ngOnInit(): void {
  }

}
