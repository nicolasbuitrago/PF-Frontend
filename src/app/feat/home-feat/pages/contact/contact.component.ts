import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { Contact } from '../../models/contact.model';

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  title = 'Contactanos';
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
