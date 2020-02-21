import { Component, OnInit } from '@angular/core';

import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faArrowAltCircleUp } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faTwitter = faTwitter;
  faArrowUp = faArrowAltCircleUp;

  constructor() { }

  ngOnInit(): void {
  }

}
