import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const routes = {
  verifyEmail: "/api/Auth/verifyemail",
};

@Injectable({
  providedIn: 'root'
})
export class VerificationService extends BaseService<any> {

  constructor(private http:HttpClient) { 
    super(http);
  }

  verifyEmail(data: any): Observable<any> {
    return this.sendPost(
      this.baseUrl(
        `${routes.verifyEmail}`
      ), data); 
  }
}
