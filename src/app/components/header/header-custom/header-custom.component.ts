import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ThemeService } from "src/app/services/theme.service";

@Component({
  selector: "app-header-custom",
  templateUrl: "./header-custom.component.html",
  styleUrls: ["./header-custom.component.scss"],
})
export class HeaderCustomComponent implements OnInit {
  show: boolean = true;

  constructor(
    private modalService: NgbModal,
    private themeService: ThemeService
  ) {}

  ngOnInit(): void {}

  joinInnerCircle() {
    this.show = true;
  }

  onSubscribe() {}

  get mode() {
    if (this.themeService.mode) {
      return true;
    }

    return false;
  }

  onEnable() {
    if (this.mode) {
      this.themeService.setNormalMode();
    } else {
      this.themeService.setMode();
    }
    location.reload();
  }
}
