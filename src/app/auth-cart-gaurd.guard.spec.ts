import { TestBed } from '@angular/core/testing';

import { AuthCartGaurdGuard } from './auth-cart-gaurd.guard';

describe('AuthCartGaurdGuard', () => {
  let guard: AuthCartGaurdGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthCartGaurdGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
