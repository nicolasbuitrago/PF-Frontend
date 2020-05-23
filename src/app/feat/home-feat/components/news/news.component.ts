import { Component, OnInit, Input } from '@angular/core';
import { DataItem } from '@shared/interfaces/data-item.model';
import { NewItem } from '@app/shared/interfaces/newitem.model';
import { NewsFormComponent } from '../forms/news-form/news-form.component';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { Form } from '@shared/interfaces/form.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})

export class NewsComponent implements OnInit, DataItem {
  @Input() resources: NewItem[];
  news: NewItem[];
  counter = 3;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.news = this.resources.slice(0, this.counter);
  }

  loadMore() {
    this.counter += 6;
    this.news = this.resources.slice(0, this.counter);
  }

  openDialog(): void {
    // tslint:disable-next-line:no-shadowed-variable
    const matDialogConfig = new MatDialogConfig();
    matDialogConfig.autoFocus = true;
    // matDialogConfig.width = '800px';
    matDialogConfig.height = '90%';
    const dialogRef = this.dialog.open(NewsFormComponent, matDialogConfig);
    dialogRef.afterClosed().subscribe(res => {
      console.log('Dialog result: ${result}');
    });
  }
}
