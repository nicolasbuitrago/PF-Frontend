import {Component, Inject, OnInit, Input} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Form } from '@shared/interfaces/form.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/* AÑADIR NUEVAS NOTICIAS */
@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.scss']
})
export class NewsFormComponent implements OnInit {
  @Input() model: Form[];
  newsInfo: FormGroup;
  detailsInfo: FormGroup;
  authorInfo: FormGroup;
  isLinear = false;

    constructor(
      // tslint:disable-next-line:variable-name
      public dialogRef: MatDialogRef<NewsFormComponent>, private _formBuilder: FormBuilder) { }


    /* matcher = new MyErrorStateMatcher(); */

    onNoClick(): void {
      this.dialogRef.close();
    }

    ngOnInit() {
      this.newsInfo = this._formBuilder.group({
        firstCtrl: ['', Validators.required]
      });
      this.detailsInfo = this._formBuilder.group({
        secondCtrl: ['', Validators.required]
      });
      this.authorInfo = this._formBuilder.group({
        thirdCtrl: ['', Validators.required]
      });
    }
}
