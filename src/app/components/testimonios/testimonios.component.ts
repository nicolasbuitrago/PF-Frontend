import { Component, OnInit, Input } from '@angular/core';

import { Testimonio } from '../../models/testimonio.model';

@Component({
  selector: 'app-testimonios',
  templateUrl: './testimonios.component.html',
  styleUrls: ['./testimonios.component.scss']
})
export class TestimoniosComponent implements OnInit {

  @Input() testimonios: Testimonio[];

  constructor() { }

  ngOnInit(): void {
  }

}
