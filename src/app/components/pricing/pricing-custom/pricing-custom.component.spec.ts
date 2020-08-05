import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingCustomComponent } from './pricing-custom.component';

describe('PricingThreeComponent', () => {
  let component: PricingCustomComponent;
  let fixture: ComponentFixture<PricingCustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingCustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
