import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndsarsComponent } from './endsars.component';

describe('EndsarsComponent', () => {
  let component: EndsarsComponent;
  let fixture: ComponentFixture<EndsarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndsarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndsarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
