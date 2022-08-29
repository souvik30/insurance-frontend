import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastPaymentComponent } from './past-payment.component';

describe('PastPaymentComponent', () => {
  let component: PastPaymentComponent;
  let fixture: ComponentFixture<PastPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastPaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
