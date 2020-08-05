import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeCustomComponent } from './welcome-custom.component';

describe('WelcomeCustomComponent', () => {
  let component: WelcomeCustomComponent;
  let fixture: ComponentFixture<WelcomeCustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeCustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
