import { Injectable, Renderer2, Inject, RendererFactory2 } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { Router, RouterEvent, NavigationEnd } from "@angular/router";
import { filter, tap } from "rxjs/operators";
import { environment } from "../environments/environment";

declare let gtag: Function;

@Injectable({
  providedIn: "root",
})
export class GoogleAnalyticsService {
  private googleAnalyticsId: string;
  private renderer2: Renderer2;
  private scriptsLoaded: boolean = false;

  constructor(
    private rendererFactory2: RendererFactory2,
    @Inject(DOCUMENT) private _document: Document,
    private _router: Router
  ) {
    this.renderer2 = this.rendererFactory2.createRenderer(null, null);
    this.googleAnalyticsId = environment.googleAnalyticsId;
  }

  init() {
    if (!this.scriptsLoaded) {
      this.insertMainScript();
    }
  }

  private insertMainScript() {
    if (this.googleAnalyticsId) {
      const script: HTMLScriptElement = this.renderer2.createElement("script");
      script.type = "text/javascript";
      script.onload = this.insertSecondHalfOfScript.bind(this);
      script.src = `https://www.googletagmanager.com/gtag/js?id=${this.googleAnalyticsId}`;
      script.text = "";
      this.renderer2.appendChild(this._document.body, script);
    }
  }

  private insertSecondHalfOfScript() {
    const script: HTMLScriptElement = this.renderer2.createElement("script");
    script.type = "text/javascript";
    script.src = "/assets/js/analytics-starting-script.js";
    script.text = "";
    this.renderer2.appendChild(this._document.body, script);
    script.onload = () => {
      this.scriptsLoaded = true;
    };
  }

  trackSinglePageView(event: NavigationEnd) {
    if (this.googleAnalyticsId && this.scriptsLoaded) {
      gtag("config", this.googleAnalyticsId, {
        page_path: event.urlAfterRedirects,
      });
    }
  }

  trackPageViews() {
    return this._router.events.pipe(
      filter(() => this.scriptsLoaded === true),
      filter((evt: RouterEvent) => evt instanceof NavigationEnd),
      tap((event: NavigationEnd) => {
        this.trackSinglePageView(event);
      })
    );
  }

  trackEvent(
    { eventName, eventCategory, eventAction, eventLabel, eventValue } = {
      eventName: null,
      eventCategory: null,
      eventAction: null,
      eventLabel: null,
      eventValue: null,
    }
  ) {
    gtag("event", eventName, {
      eventCategory,
      eventLabel,
      eventAction,
      eventValue,
    });
  }
}
