import { ThrowStmt } from "@angular/compiler";
import { AfterViewInit, ChangeDetectorRef, Component } from "@angular/core";
import { ThemeService } from "src/app/services/theme.service";

@Component({
  selector: "app-footer-three",
  templateUrl: "./footer-three.component.html",
  styleUrls: ["./footer-three.component.scss"],
})
export class FooterThreeComponent implements AfterViewInit {
  ourDate = new Date();
  constructor(
    private themeService: ThemeService,
    private ref: ChangeDetectorRef
  ) {}

  ngAfterViewInit() {}

  get mode() {
    if (this.themeService.mode) {
      return true;
    }

    return false;
  }
}
