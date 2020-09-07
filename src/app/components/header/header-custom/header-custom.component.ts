import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-header-custom",
  templateUrl: "./header-custom.component.html",
  styleUrls: ["./header-custom.component.css"],
})
export class HeaderCustomComponent implements OnInit {
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  joinInnerCircle(content: any) {
    this.modalService.open(content, {});
  }

  onSubscribe() {}
}
