import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/* Añadir nuevos eventos */
@Component({
  selector: 'app-events-form',
  templateUrl: './events-form.component.html',
  styleUrls: ['./events-form.component.scss']
})
export class EventsFormComponent implements OnInit {
  generalInfo: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EventsFormComponent>,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.generalInfo = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
  }

  get getForm() {
    return this.generalInfo;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
