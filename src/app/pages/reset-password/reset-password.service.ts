import { Injectable } from "@angular/core";
import { BaseService } from "src/app/services/base.service";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const routes = {
  resetpassword: "/api/Auth/resetpassword",
};

@Injectable({
  providedIn: "root",
})
export class ResetPasswordService extends BaseService<any> {
  constructor(private http: HttpClient) {
    super(http);
  }

  onResetPassword(payload: any): Observable<any> {
    return this.sendPost(this.baseUrl(`${routes.resetpassword}`), payload);
  }
}
