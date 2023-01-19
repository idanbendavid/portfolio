import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import  config from  "../../config.json";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private emailApi: string = `https://mailthis.to/${config.email_alias}`;

  constructor(private http: HttpClient) { }

  PostMessage(emailForm: {}) {
    return this.http.post(this.emailApi, emailForm, { responseType: 'text' })
      .pipe(
        map(
          (response: any) => {
            if (response) {
              return response;
            }else{
              return null;
            }
          },
          (error: any) => {
            return error;
          }
        )
      )
  }
}
