import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  messages: Subject<any>;

  constructor() { 
    this.messages = new Subject<any>();
  }

  add(message: string){
    this.messages.next(message);
  }

  error(message: string){
    this.messages.next(message);
  }

  clear(id:number){

  }
}
