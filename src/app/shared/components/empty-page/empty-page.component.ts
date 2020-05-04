import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-empty-page',
  templateUrl: './empty-page.component.html',
  styleUrls: ['./empty-page.component.scss']
})
export class EmptyPageComponent implements OnInit {

  @Input() show: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
