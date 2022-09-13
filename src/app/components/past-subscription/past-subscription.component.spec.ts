import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastSubscriptionComponent } from './past-subscription.component';

describe('PastSubscriptionComponent', () => {
  let component: PastSubscriptionComponent;
  let fixture: ComponentFixture<PastSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastSubscriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
