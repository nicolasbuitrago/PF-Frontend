import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { StudioService } from '../../services/studio.service';
import { Studio } from '../../models/studio.model';

@Component({
  selector: 'app-studio',
  templateUrl: './studio.component.html',
  styleUrls: ['./studio.component.scss']
})
export class StudioComponent implements OnInit {

  studio: Studio;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private studioService: StudioService
  ) { }

  ngOnInit(): void {
    this.getStudio();
  }

  getStudio() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.studioService.getStudio(id)
    .subscribe((studio) => {
      this.studio = studio;
      if (this.studio === undefined) {
        this.goBack();
      }
    });
  }

  goBack() {
    this.router.navigate(['/studios']);
  }

}
