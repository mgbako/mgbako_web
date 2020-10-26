import { Component, OnInit } from "@angular/core";
import { ThemeService } from "src/app/services/theme.service";

@Component({
  selector: "app-discover-five",
  templateUrl: "./discover-five.component.html",
  styleUrls: ["./discover-five.component.scss"],
})
export class DiscoverFiveComponent implements OnInit {
  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {}

  get mode() {
    if (this.themeService.mode) {
      return true;
    }

    return false;
  }
}
