import { Component, OnInit, Input } from '@angular/core';
import { Courses } from '@app/shared/interfaces/courses.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  @Input() resources: Courses[];

  constructor() { }

  ngOnInit(): void {
  }

}
