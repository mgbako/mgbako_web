import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-loader-dark",
  templateUrl: "./loader-dark.component.html",
  styleUrls: ["./loader-dark.component.scss"],
})
export class LoaderDarkComponent implements OnInit {
  @Input() isLoading = false;
  @Input() message: string;

  constructor() {}

  ngOnInit() {}
}
