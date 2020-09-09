import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.css"],
})
export class ModalComponent implements OnInit {
  @Input() show: boolean = true;
  @Output() close = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {}

  onClose(event) {
    this.close.emit(event);
  }
}
