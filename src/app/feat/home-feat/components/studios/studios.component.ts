import { Component, OnInit, Input } from '@angular/core';
import { Studio } from '@shared/interfaces/studio.model';

@Component({
  selector: 'app-studios',
  templateUrl: './studios.component.html',
  styleUrls: ['./studios.component.scss']
})
export class StudiosComponent implements OnInit {

  @Input() resources: Studio[];

  constructor() { }

  ngOnInit(): void {
  }

}
