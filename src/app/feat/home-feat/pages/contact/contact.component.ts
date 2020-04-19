import { Component, OnInit } from '@angular/core';
import { ContentService } from '@core/services/content.service';
import { Contact } from '@shared/interfaces/contact.model';

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  title = 'Contact us';
  contact: Contact;

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.contentService.getContact().subscribe(
      (contact: Contact) => {
        this.contact = contact;
      }
    );
  }

}
