import { Injectable } from "@angular/core";
import { BaseService } from "src/app/services/base.service";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const routes = {
  forgotpassword: "/api/Auth/forgotpassword",
  resetpassword: "/api/Auth/resetpassword",
};

@Injectable({
  providedIn: "root",
})
export class ForgotPasswordService extends BaseService<any> {
  constructor(private http: HttpClient) {
    super(http);
  }

  onForgot(payload: any): Observable<any> {
    return this.sendPost(this.baseUrl(`${routes.forgotpassword}`), payload);
  }
  onResetPassword(payload: any): Observable<any> {
    return this.sendPost(this.baseUrl(`${routes.resetpassword}`), payload);
  }
}
