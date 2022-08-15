import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDependentComponent } from './update-dependent.component';

describe('UpdateDependentComponent', () => {
  let component: UpdateDependentComponent;
  let fixture: ComponentFixture<UpdateDependentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDependentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateDependentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
