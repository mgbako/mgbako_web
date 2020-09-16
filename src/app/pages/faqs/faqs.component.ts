import { Component, OnInit } from "@angular/core";
import { FaqsService } from "./faqs.service";

@Component({
  selector: "app-faqs",
  templateUrl: "./faqs.component.html",
  styleUrls: ["./faqs.component.css"],
})
export class FaqsComponent implements OnInit {
  faqs: any[];
  constructor(private faqsService: FaqsService) {}

  ngOnInit(): void {
    this.faqsService.getFaqs().subscribe((res) => {
      //console.log(res);
      this.faqs = res;
    });
  }
}
