import { Injectable } from "@angular/core";
import { BaseService } from "src/app/services/base.service";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const routes = {
  airtimePurchasePromo: "/api/Bills/mobile/airtimepurchasepromo",
};

@Injectable({
  providedIn: "root",
})
export class EndSarsService extends BaseService<any> {
  constructor(private http: HttpClient) {
    super(http);
  }

  onAirtimePurchasePromo(payload: any): Observable<any> {
    return this.sendPost(
      this.baseUrl(`${routes.airtimePurchasePromo}`),
      payload
    );
  }
}
