import { TestBed } from '@angular/core/testing';

import { DdatoriuserGuard } from './ddatoriuser.guard';

describe('DdatoriuserGuard', () => {
  let guard: DdatoriuserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DdatoriuserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
