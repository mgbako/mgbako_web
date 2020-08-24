import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-loader',
  templateUrl: './page-loader.component.html',
  styleUrls: ['./page-loader.component.scss']
})
export class PagerLoaderComponent implements OnInit {
  @Input() isLoading = false;
  @Input() message: string;

  constructor() {}

  ngOnInit() {}
}
