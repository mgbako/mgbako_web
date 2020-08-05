import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing-three',
  templateUrl: './pricing-three.component.html',
  styleUrls: ['./pricing-three.component.css']
})
export class PricingThreeComponent implements OnInit {
  colored = {
    "colorStat" :  false,
    "colorStat1":  false,
    "colorStat2":  false,
    "colorStat3":  false,
    "colorStat4":  false,
    "colorStat5":  false
  }
  
  constructor() { }

  ngOnInit(): void {
  }
  changeColor(card ){
    let count = 0;

    Object.entries(this.colored).map(col=>{
      if(col){
        count = count+1
      }
    })
    if(count > 1){
      this.colored.colorStat = false ;
      this.colored.colorStat1 = false ;
      this.colored.colorStat2 = false ;
      this.colored.colorStat3 = false ;
      this.colored.colorStat4 = false ;
      this.colored.colorStat5 = false ;
    }
    this.colored[card] =  !this.colored[card];
  }

}
