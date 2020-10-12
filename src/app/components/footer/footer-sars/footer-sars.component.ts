import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer-sars",
  templateUrl: "./footer-sars.component.html",
  styleUrls: ["./footer-sars.component.scss"],
})
export class FooterSarsComponent implements OnInit {
  ourDate = new Date();
  constructor() {}

  ngOnInit(): void {}
}
