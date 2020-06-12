import { Component, OnInit, Input } from '@angular/core';
import { DataItem } from '@shared/interfaces/data-item.model';
import { ContactInformation } from '@shared/interfaces/contact-information.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactService } from '@core/services/contact.service';
import { NotificationService } from '@core/services/notification.service';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent implements OnInit, DataItem {

  @Input() data: ContactInformation;
  private form: FormGroup;
  isSubmitted: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  get getForm() {
    return this.form;
  }

  contactEmail() {
    this.isSubmitted = true;
    // console.log('Click');
    if (this.form.invalid) {
      // console.log('Invalid');
      this.notificationService.add('Invalid information, please try again.');
      return;
    }
    console.log('Send');
    this.contactService.sendContact(
      this.form.value.name,
      this.form.value.phone,
      this.form.value.email,
      this.form.value.message
    ).subscribe(
      (resp: any) => {
        this.form.patchValue({
          name: '',
          phone: '',
          email: '',
          message: ''
        });
        this.notificationService.add('Message sent.');
        this.isSubmitted = false;
        // console.log('Enviado');
      },
      (err) => {
        // console.log('Err');
        this.notificationService.add('Error, please try again.');
      }
    );
  }

}
