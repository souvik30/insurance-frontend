import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDependentsComponent } from './search-dependents.component';

describe('SearchDependentsComponent', () => {
  let component: SearchDependentsComponent;
  let fixture: ComponentFixture<SearchDependentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchDependentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchDependentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
