import { Component, OnInit } from "@angular/core";
import { ThemeService } from "src/app/services/theme.service";

@Component({
  selector: "app-innercircle",
  templateUrl: "./innercircle.component.html",
  styleUrls: ["./innercircle.component.scss"],
})
export class InnercircleComponent implements OnInit {
  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {}

  get mode() {
    if (this.themeService.mode) {
      return { dark: true };
    }

    return "";
  }
}
