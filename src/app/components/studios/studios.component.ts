import { Component, OnInit } from '@angular/core';

import { StudioService } from '../../services/studio.service';
import { Studio } from '../../models/studio.model';

@Component({
  selector: 'app-studios',
  templateUrl: './studios.component.html',
  styleUrls: ['./studios.component.css']
})
export class StudiosComponent implements OnInit {

  studios: Studio[];

  constructor(private studioService: StudioService) { }

  ngOnInit(): void {
    this.getStudios();
  }

  getStudios(): void {
    this.studioService.getStudios()
    .subscribe(studios => this.studios = studios);
  }

}
