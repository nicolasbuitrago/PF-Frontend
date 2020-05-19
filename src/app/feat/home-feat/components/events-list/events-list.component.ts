import { Component, OnInit, Input } from '@angular/core';
// import { ContentService } from '@core/services/content.service';
import { Event } from '@shared/interfaces/event.model';
import { DataItem } from '@shared/interfaces/data-item.model';
import { EventsFormComponent } from '../events-form/events-form.component';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit, DataItem {

  @Input() resources: Event[];
  meetUp: any;
  meets: any[];
  selectedEvent: Event;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.selectedEvent = this.resources[0];
  }

  // getEvents(): void {
  //   this.contentService.getEvents()
  //   .subscribe((events) => {
  //     this.events = events;
  //     this.selectedEvents = [];
  //     for (const event of events) {
  //       this.dateCustomClasses.push({ date: event.date, classes: ['date-event']});
  //       this.selectedEvents.push(event);
  //     }
  //   });
  // }

  // getMeetUps() {
  //   this.contentService.getMeetUp()
  //     .subscribe(
  //       (meetUp) => {
  //         this.meetUp = meetUp;
  //         // meet.descrition = meet.description.replace(/<p>|<\/p>/, '');
  //       }
  //     );
  // }


  // getEventsMeetUps() {
  //   this.contentService.getEventsMeetUp()
  //     .subscribe(
  //       (events) => {
  //         this.meets = events;
  //         // meet.descrition = meet.description.replace(/<p>|<\/p>/, '');
  //       }
  //     );
  // }

  selectEvent(event?: Event) {
    this.selectedEvent = event;
  }

  equalDate(DateA: Date, DateB: Date): boolean {     // this function is good for dates > 01/01/1970
    const a = new Date(DateA);
    const b = new Date(DateB);
    const msDateA = Date.UTC(a.getFullYear(), a.getMonth() + 1, a.getDate());
    const msDateB = Date.UTC(b.getFullYear(), b.getMonth() + 1, b.getDate());
    // console.log(msDateA + ' === ' + msDateB);
    return msDateA === msDateB;
  }

  openDialog(): void {
    // tslint:disable-next-line:no-shadowed-variable
    const matDialogConfig = new MatDialogConfig();
    matDialogConfig.autoFocus = true;
    // matDialogConfig.width = '800px';
    matDialogConfig.height = '90%';
    const dialogRef = this.dialog.open(EventsFormComponent, matDialogConfig);
    dialogRef.afterClosed().subscribe(res => {
      console.log('Dialog result: ${result}');
    });
  }



}
