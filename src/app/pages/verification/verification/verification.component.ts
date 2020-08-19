import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {

  ourDate = new Date();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onlogin(){
    this.router.navigate(['/'])
  }

}