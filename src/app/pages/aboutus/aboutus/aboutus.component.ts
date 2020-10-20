import { Component, OnInit } from "@angular/core";
import { ThemeService } from "src/app/services/theme.service";

@Component({
  selector: "app-aboutus",
  templateUrl: "./aboutus.component.html",
  styleUrls: ["./aboutus.component.scss"],
})
export class AboutusComponent implements OnInit {
  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {}

  get mode() {
    if (this.themeService.mode) {
      return { dark: true };
    }

    return "";
  }
}
