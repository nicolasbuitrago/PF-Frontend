import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from '@app/app.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  title: string;
  @Input() fixed = false;

  constructor(private appComponent: AppComponent) { }

  ngOnInit(): void {
    this.title = this.appComponent.title;
  }

}
