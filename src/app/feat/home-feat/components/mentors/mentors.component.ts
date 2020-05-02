import { Component, OnInit, Input } from '@angular/core';
import { DataItem } from '../../models/data-item.model';
import { Mentor } from '@app/shared/interfaces/mentor.model';

@Component({
  selector: 'app-mentors',
  templateUrl: './mentors.component.html',
  styleUrls: ['./mentors.component.scss']

})


export class MentorsComponent implements OnInit, DataItem {

  @Input() resources: Mentor[];

  constructor() { }

  ngOnInit(): void {
  }

}
