import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependentTableComponent } from './dependent-table.component';

describe('DependentTableComponent', () => {
  let component: DependentTableComponent;
  let fixture: ComponentFixture<DependentTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DependentTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DependentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
