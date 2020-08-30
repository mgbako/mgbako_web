import { Component, OnInit } from "@angular/core";
import { FaqCategoryService } from "./faq-category.service";

@Component({
  selector: "app-faq-category",
  templateUrl: "./faq-category.component.html",
  styleUrls: ["./faq-category.component.css"],
})
export class FaqCategoryComponent implements OnInit {
  categories: any[];
  constructor(private faqCategoryService: FaqCategoryService) {}

  ngOnInit(): void {
    this.faqCategoryService.getCategories().subscribe((res) => {
      console.log(res);
      this.categories = res;
    });
  }
}
