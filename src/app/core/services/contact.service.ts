import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  sendContact(name: string, phone: string, email: string, message: string) {
    return this.http.post<any>(`${environment.apiUrl}/contact_email`, {name, phone, email, message});
  }
}
