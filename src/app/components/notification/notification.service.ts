import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";
import { scan } from "rxjs/operators";

export interface Command {
  id: number;
  type: "success" | "error" | "clear";
  text?: string;
}
@Injectable({
  providedIn: "root",
})
export class NotificationService {
  messagesInput: Subject<Command>;
  messagesOutput: Observable<Command[]>;

  constructor() {
    this.messagesInput = new Subject<Command>();
    this.messagesOutput = this.messagesInput.pipe(
      scan((acc: Command[], value: Command) => {
        return value.type === "clear"
          ? acc.filter((message) => message.id !== value.id)
          : [...acc, value];
      }, [])
    );
  }

  success(message: string) {
    const id = this.randomId;
    this.messagesInput.next({
      id,
      text: message,
      type: "success",
    });
    this.timeout(id);
  }

  error(message: string) {
    const id = this.randomId;
    this.messagesInput.next({
      id,
      text: message,
      type: "error",
    });
    this.timeout(id);
  }

  clear(id: number) {
    this.messagesInput.next({
      id,
      type: "clear",
    });
  }

  private timeout(id: number) {
    setTimeout(() => {
      this.clear(id);
    }, 5000);
  }

  private get randomId() {
    return Math.round(Math.random() * 10000);
  }
}
