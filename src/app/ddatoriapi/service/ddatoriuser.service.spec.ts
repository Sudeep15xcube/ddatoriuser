import { TestBed } from '@angular/core/testing';

import { DdatoriuserService } from './ddatoriuser.service';

describe('DdatoriuserService', () => {
  let service: DdatoriuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DdatoriuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
