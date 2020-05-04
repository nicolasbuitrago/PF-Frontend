import { Component, OnInit, Input } from '@angular/core';
import { DataItem } from '@shared/interfaces/data-item.model';
import { ContactInformation } from '@shared/interfaces/contact-information.model';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent implements OnInit, DataItem {

  @Input() data: ContactInformation;

  constructor() { }

  ngOnInit(): void {
  }

}
