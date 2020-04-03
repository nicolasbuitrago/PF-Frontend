import { Component, OnInit, Input } from '@angular/core';

import { Testimonio } from '@shared/interfaces/testimonio.model';
import { ItemComponent } from '../../models/item.component.model';

@Component({
  selector: 'app-testimonios',
  templateUrl: './testimonios.component.html',
  styleUrls: ['./testimonios.component.scss']
})
export class TestimoniosComponent implements OnInit, ItemComponent {

  @Input() data: Testimonio[];

  constructor() { }

  ngOnInit(): void {
  }

}
