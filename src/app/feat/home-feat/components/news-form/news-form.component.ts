import {Component, Inject, OnInit, Input} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Form } from '@shared/interfaces/form.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

/* AÑADIR NUEVAS NOTICIAS */
@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.scss']
})
export class NewsFormComponent implements OnInit {
  detailsInfo: FormGroup;
  authorInfo: FormGroup;
  date: FormGroup;
  image: FormGroup;
  newsInfo: FormGroup;
  isLinear = false;
  previewImg: string;
  form: FormGroup;

  constructor(
    // tslint:disable-next-line:variable-name
    private sanitizer: DomSanitizer,
    public dialogRef: MatDialogRef<NewsFormComponent>,
    private formBuilder: FormBuilder) { }


  /* matcher = new MyErrorStateMatcher(); */
    // Image Preview
  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    // console.log(file);
    this.form.patchValue({
      image: file
    });
    this.form.get('image').updateValueAndValidity();

    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.previewImg = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  public getSantizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  droppedFile(event) {
    const file = event[0];
    // console.log(file);
    this.form.patchValue({
      image: file
    });
    this.form.get('image').updateValueAndValidity();

    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.previewImg = this.getSantizeUrl(reader.result as string) as string;
    };
    reader.readAsDataURL(file);
  }

  deleteImage() {
    this.form.patchValue({
      image: null
    });
    this.form.get('image').updateValueAndValidity();
    this.previewImg = null;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.newsInfo = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.detailsInfo = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.authorInfo = this.formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
  }

}
