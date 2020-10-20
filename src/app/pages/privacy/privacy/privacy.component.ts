import { Component, OnInit } from "@angular/core";
import { ThemeService } from "src/app/services/theme.service";

@Component({
  selector: "app-privacy",
  templateUrl: "./privacy.component.html",
  styleUrls: ["./privacy.component.scss"],
})
export class PrivacyComponent implements OnInit {
  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {}

  get mode() {
    if (this.themeService.mode) {
      return { dark: true };
    }

    return "";
  }
}
