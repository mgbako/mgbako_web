import { Component, OnInit } from "@angular/core";
import { NgwWowService } from "ngx-wow";
import { GoogleAnalyticsService } from "./google-analytics.service";
import { Router, NavigationEnd } from "@angular/router";
import { filter } from "rxjs/operators";
import { environment } from "src/environments/environment";

declare let gtag;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "sapp";
  constructor(
    private wowService: NgwWowService,
    //private analytics: GoogleAnalyticsService,
    private router: Router
  ) {
    this.wowService.init();

    const navEndEvents = router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    );
    navEndEvents.subscribe((event: NavigationEnd) => {
      gtag("config", environment.googleAnalyticsId, {
        page_path: event.urlAfterRedirects,
      });
    });
  }

  ngOnInit() {
    if (environment.production) {
      console.log = function () {};
    }

    //this.analytics.init();
    //this.analytics.trackPageViews().subscribe();
  }
}
