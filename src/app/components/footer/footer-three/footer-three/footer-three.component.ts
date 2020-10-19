import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer-three",
  templateUrl: "./footer-three.component.html",
  styleUrls: ["./footer-three.component.scss"],
})
export class FooterThreeComponent implements OnInit {
  ourDate = new Date();
  constructor() {}

  ngOnInit(): void {}
}
