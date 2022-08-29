import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckMediclaimSubscriptionComponent } from './check-mediclaim-subscription.component';

describe('CheckMediclaimSubscriptionComponent', () => {
  let component: CheckMediclaimSubscriptionComponent;
  let fixture: ComponentFixture<CheckMediclaimSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckMediclaimSubscriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckMediclaimSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
