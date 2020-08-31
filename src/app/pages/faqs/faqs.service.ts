import { Injectable } from "@angular/core";
import { BaseService } from "src/app/services/base.service";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class FaqsService extends BaseService<any> {
  constructor(private http: HttpClient) {
    super(http);
  }

  getFaqs(): Observable<any> {
    return new Observable((observe) => {
      const req = new XMLHttpRequest();
      req.open("GET", "assets/data/faqs.json");
      req.onload = () => {
        observe.next(JSON.parse(req.response));
        observe.complete();
      };
      req.send();
    });
  }
}
