import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckSubscriptionStatusComponent } from './check-subscription-status.component';

describe('CheckSubscriptionStatusComponent', () => {
  let component: CheckSubscriptionStatusComponent;
  let fixture: ComponentFixture<CheckSubscriptionStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckSubscriptionStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckSubscriptionStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
