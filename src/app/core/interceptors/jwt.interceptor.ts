import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from '@core/services/auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    const currentSession = this.authService.currentSessionValue;
    // if (currentSession && currentSession.token) {
    // console.log(currentSession);
    if (currentSession) {
      request = request.clone({
        headers: new HttpHeaders({
          Authorization: `Token token=${currentSession.secret}`
        })
      });
      // console.log('Added header http request');
    }
    // console.log('Intercepted http request');
    // console.log(request);
    return next.handle(request);
  }
}
