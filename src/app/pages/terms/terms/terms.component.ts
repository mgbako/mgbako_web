import { Component, OnInit } from "@angular/core";
import { ThemeService } from "src/app/services/theme.service";

@Component({
  selector: "app-terms",
  templateUrl: "./terms.component.html",
  styleUrls: ["./terms.component.scss"],
})
export class TermsComponent implements OnInit {
  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {}

  get mode() {
    if (this.themeService.mode) {
      return { dark: true };
    }

    return "";
  }
}
