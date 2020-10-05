import { Injectable } from "@angular/core";
import { BaseService } from "src/app/services/base.service";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const routes = {
  getTransactionDetail: "/api/Transaction/transactiondetail"
};

@Injectable({
  providedIn: "root"
})
export class AccountVerificationService extends BaseService<any> {
  constructor(private http: HttpClient) {
    super(http);
  }

  getTransactionDetail(transactionReference: string): Observable<any> {
    return this.sendGet(
      this.baseUrl(`${routes.getTransactionDetail}/${transactionReference}`)
    );
  }
}
