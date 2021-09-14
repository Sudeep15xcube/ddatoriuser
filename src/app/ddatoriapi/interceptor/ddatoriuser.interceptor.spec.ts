import { TestBed } from '@angular/core/testing';

import { DdatoriuserInterceptor } from './ddatoriuser.interceptor';

describe('DdatoriuserInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      DdatoriuserInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: DdatoriuserInterceptor = TestBed.inject(DdatoriuserInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
