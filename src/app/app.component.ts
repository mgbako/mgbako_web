import { Component, OnInit } from "@angular/core";
import { NgwWowService } from "ngx-wow";
import { GoogleAnalyticsService } from "./google-analytics.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "sapp";
  constructor(
    private wowService: NgwWowService,
    private analytics: GoogleAnalyticsService
  ) {
    this.wowService.init();
  }

  ngOnInit() {
    this.analytics.init();
    this.analytics.trackPageViews().subscribe();
  }
}
