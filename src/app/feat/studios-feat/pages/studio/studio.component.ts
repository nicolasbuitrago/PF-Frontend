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
  urlMap: string;

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
      } else {
        this.urlMap = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.780062235722!2d'
          + studio.ubication.lon + '!3d' + studio.ubication.lat +
          '!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDU4JzQ3LjkiTiA3NMKwNDgnMDQuNyJX!5e0!3m2!1ses!2sco!4v1584804178411!5m2!1ses!2sco';
      }
    });
  }

  goBack() {
    this.router.navigate(['/studios']);
  }

}
