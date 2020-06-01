import { Component, OnInit, Input } from '@angular/core';
import { Course } from '@app/shared/interfaces/course.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  @Input() resources: Course[];

  constructor() { }

  ngOnInit(): void {
  }

}
