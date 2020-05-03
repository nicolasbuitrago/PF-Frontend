import { Component, OnInit, Input } from '@angular/core';
import { DataItem } from '@shared/interfaces/data-item.model';
import { Sponsor } from '@shared/interfaces/sponsor.model';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss']
})
export class SponsorsComponent implements OnInit, DataItem {

  @Input() resources: Sponsor[];

  constructor() { }

  ngOnInit(): void {
  }

}
