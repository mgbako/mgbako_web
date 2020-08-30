import { Injectable } from "@angular/core";
import { BaseService } from "src/app/services/base.service";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class FaqCategoryService extends BaseService<any> {
  constructor(private http: HttpClient) {
    super(http);
  }

  getCategories(): Observable<any> {
    return new Observable((observe) => {
      const req = new XMLHttpRequest();
      req.open("GET", "assets/data/faq_categories.json");
      req.onload = () => {
        observe.next(JSON.parse(req.response));
        observe.complete();
      };
      req.send();
    });
  }
}
