import { Component, OnInit, Input } from '@angular/core';
import { DataItem } from '@shared/interfaces/data-item.model';
import { DataComponent } from '@shared/interfaces/data-component.model';
import { VinculationFormComponent } from '../forms/vinculation-form/vinculation-form.component';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-vinculation',
  templateUrl: './vinculation.component.html',
  styleUrls: ['./vinculation.component.scss']
})
export class VinculationComponent implements OnInit, DataItem {

  @Input() data: DataComponent;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openVinculationForm(): void {
    // tslint:disable-next-line:no-shadowed-variable
    const matDialogConfig = new MatDialogConfig();
    matDialogConfig.autoFocus = true;
    // matDialogConfig.width = '800px';
    matDialogConfig.height = '90%';
    const dialogRef = this.dialog.open(VinculationFormComponent, matDialogConfig);
    dialogRef.afterClosed().subscribe(res => {
      console.log('Dialog result = ' + res);
    });
  }

}
