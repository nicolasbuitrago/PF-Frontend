import { Component, OnInit, Input } from '@angular/core';

import { Testimonio } from '@shared/interfaces/testimonio.model';
import { DataComponent } from '../../models/data-component.model';

@Component({
  selector: 'app-testimonios',
  templateUrl: './testimonios.component.html',
  styleUrls: ['./testimonios.component.scss']
})
export class TestimoniosComponent implements OnInit, DataComponent {

  @Input() data: Testimonio[];

  constructor() { }

  ngOnInit(): void {
  }

}
