import { TestBed } from '@angular/core/testing';

import { MediclaimService } from './mediclaim.service';

describe('MediclaimService', () => {
  let service: MediclaimService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediclaimService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
