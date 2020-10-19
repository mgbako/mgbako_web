import { Component, OnInit } from "@angular/core";
import { ThemeService } from "src/app/services/theme.service";

@Component({
  selector: "app-feature-one",
  templateUrl: "./feature-one.component.html",
  styleUrls: ["./feature-one.component.scss"],
})
export class FeatureOneComponent implements OnInit {
  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {}

  getMode() {
    if (this.themeService.mode) {
      return true;
    }
    return false;
  }
}
