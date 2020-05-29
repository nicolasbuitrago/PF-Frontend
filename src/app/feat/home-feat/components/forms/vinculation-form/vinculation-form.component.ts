import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { MatDialogRef } from '@angular/material/dialog';
import { ContentService } from '@core/services/content.service';
import { Vinculate } from '@shared/interfaces/vinculate.model';
import { NavBarInformation } from '@shared/interfaces/contact-information.model';

@Component({
  selector: 'app-vinculation-form',
  templateUrl: './vinculation-form.component.html',
  styleUrls: ['./vinculation-form.component.scss']
})
export class VinculationFormComponent implements OnInit {

  private form: FormGroup;
  public isLoading: boolean;
  name: string;

  constructor(
    private formBuilder: FormBuilder,
    // public dialogRef: MatDialogRef<VinculationFormComponent>,
    private contentService: ContentService
  ) {
    this.contentService.getNavBar().subscribe(
      (bar: NavBarInformation) => {
        this.name = bar.name;
      }
    );
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      phone: ['', Validators.required],
      why: ['', Validators.required],
      roleType: ['', Validators.required]
    });
  }

  get getForm() {
    return this.form;
  }

  vinculate() {
    this.isLoading = true;
    this.contentService.vinculate(
      this.form.value.email,
      this.form.value.phone,
      this.form.value.why,
      this.form.value.roleType
    ).subscribe(
      (resp: Vinculate) => {
        this.isLoading = false;
      },
      (err) => {
        this.isLoading = false;
        console.log('Err = ' + err);
      }
    );
  }

  // onNoClick(): void {
  //   this.dialogRef.close();
  // }

}
