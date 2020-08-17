import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  data: Subject<any>;

  constructor() {
    this.data = new Subject<any>();
  }

  add(value:any){
    this.data.next(value);
  }

  getData(){
    return this.data;
  }
}
