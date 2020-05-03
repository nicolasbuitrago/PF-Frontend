import { Component, OnInit, Input } from '@angular/core';
import { DataItem } from '@shared/interfaces/data-item.model';
import { Mentor } from '@app/shared/interfaces/mentor.model';
import { ContentService } from '@app/core/services/content.service';
import { AppComponent } from '@app/app.component';


@Component({
  selector: 'app-mentors',
  templateUrl: './mentors.component.html',
  styleUrls: ['./mentors.component.scss']
})

export class MentorsComponent implements OnInit, DataItem {

  @Input() resources: Mentor[];

  constructor(

  ) { }

  ngOnInit(): void {

  }

}
