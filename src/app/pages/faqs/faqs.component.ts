import { Component, OnInit } from "@angular/core";
import { ThemeService } from "src/app/services/theme.service";
import { FaqsService } from "./faqs.service";

@Component({
  selector: "app-faqs",
  templateUrl: "./faqs.component.html",
  styleUrls: ["./faqs.component.scss"],
})
export class FaqsComponent implements OnInit {
  faqs: any[];
  constructor(
    private faqsService: FaqsService,
    private themeService: ThemeService
  ) {}

  ngOnInit(): void {
    this.faqsService.getFaqs().subscribe((res) => {
      //console.log(res);
      this.faqs = res;
    });
  }

  get mode() {
    if (this.themeService.mode) {
      return { dark: true };
    }

    return "";
  }
}
