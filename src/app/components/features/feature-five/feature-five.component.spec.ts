import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureFiveComponent } from './feature-five.component';

describe('FeatureFiveComponent', () => {
  let component: FeatureFiveComponent;
  let fixture: ComponentFixture<FeatureFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
