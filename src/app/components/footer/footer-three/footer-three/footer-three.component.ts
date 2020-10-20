import { Component, OnInit } from "@angular/core";
import { ThemeService } from "src/app/services/theme.service";

@Component({
  selector: "app-footer-three",
  templateUrl: "./footer-three.component.html",
  styleUrls: ["./footer-three.component.scss"],
})
export class FooterThreeComponent implements OnInit {
  ourDate = new Date();
  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {}

  get mode() {
    if (this.themeService.mode) {
      return true;
    }

    return false;
  }
}
