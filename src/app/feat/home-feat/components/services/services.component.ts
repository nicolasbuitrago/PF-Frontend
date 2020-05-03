import { Component, OnInit, Input } from '@angular/core';
import { DataItem } from '../../models/data-item.model';
import { Service } from '@app/shared/interfaces/service.model';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit, DataItem {

  @Input() resources: Service[];

  constructor() { }

  ngOnInit(): void {
  }

}
