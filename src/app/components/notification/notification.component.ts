import { Component, OnInit } from '@angular/core';
import { NotificationService, Command } from './notification.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  messages: Observable<Command[]>
  constructor(private notificationService: NotificationService) { 
    this.messages = this.notificationService.messagesOutput;
  }

  ngOnInit(): void {
  }

  close(id:number){
    this.notificationService.clear(id);
  }

}
