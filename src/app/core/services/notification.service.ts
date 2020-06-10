import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

interface Message {
  text: string;
  duration: number;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  GENERAL_ERROR_MESSAGE = 'Ocurrió un error';
  private isInstanceVisible: boolean;
  private msgQueue: Message[];

  constructor(
    private snackBar: MatSnackBar
  ) {
    this.msgQueue = [];
    this.isInstanceVisible = false;
  }

  add(text: string, duration: number = 3500) {
    this.msgQueue.push({ text, duration });
    if (!this.isInstanceVisible) {
      this.showNext();
    }
  }

  showNext() {
    if (this.msgQueue.length === 0) {
      return;
    }
    console.log('msgQueue', this.msgQueue);
    const message = this.msgQueue.shift();
    this.isInstanceVisible = true;
    const snackBarRef = this.snackBar.open(message.text, 'Close', { duration: message.duration });
    snackBarRef.afterDismissed().subscribe(() => {
      this.isInstanceVisible = false;
      this.showNext();
    });
  }

  stopAll() {
    this.msgQueue = [];
    this.isInstanceVisible = false;
  }

  isInQueue(text: string) {
    return this.msgQueue.some(elem => elem.text === text);
  }
}
