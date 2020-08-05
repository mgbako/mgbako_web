import { Injectable } from '@angular/core';
import { BaseService } from "../../services/base.service";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const routes = {
  currencies: "/api/Currency",
  rate: "/api/Rate",
};
@Injectable({
  providedIn: 'root'
})
export class IndexService extends BaseService<any> {

  constructor(private http: HttpClient) {
    super(http);
  }
  getCurrencies(pageNo, pageSize): Observable<any> {
    return this.sendGet(
      this.baseUrl(
        `${routes.currencies}?pageNumber=${pageNo}&pageSize=${pageSize}`
      )
    );
  }
  getRate(payload: any): Observable<any> {
    return this.sendGet(
      this.baseUrl(
        `${routes.rate}/exchangerate/${payload.sendCurrencyCode}/${payload.basecurrencyCode}/${payload.receiveCurrencyCode}`
      )
    );
  }
}
