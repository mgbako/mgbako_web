import { Injectable } from '@angular/core';
import { BaseService } from "../../services/base.service";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const routes = {
  currencies: "/api/Currency",
  rate: "/api/Rate",
  getBanks: '/api/Transaction/banks',
  accountLookup: '/api/Transaction/accountlookup'
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
  getBanks(): Observable<any> {
    return this.sendGet(
      this.baseUrl(
        `${routes.getBanks}`
      )
    );
  }

  accountLookup(data: any): Observable<any> {
    return this.sendPost(
      this.baseUrl(
        `${routes.accountLookup}`
      ), data);
    
  }

  getRate(payload: any): Observable<any> {
    return this.sendGet(
      this.baseUrl(
        `${routes.rate}/exchangerate/${payload.sendCurrencyCode}/${payload.basecurrencyCode}/${payload.receiveCurrencyCode}`
      )
    );
  }
}
