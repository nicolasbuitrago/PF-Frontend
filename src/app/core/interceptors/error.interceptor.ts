import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

// import { AuthService } from '@core/services/auth.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor() { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      console.log(err);
      // if (err.status === 404 && err.error.error === 'token not found') {
      //   // auto logout if 401 response returned from api
      //   this.authService.deleteSession();
      //   location.reload(true);
      // }
      const error = err.error.error || err.statusText;
      return throwError(error);
    }));
  }
}
