import { TestBed } from '@angular/core/testing';

import { CanActivateCheckoutGuard } from './can-activate-checkout.guard';

describe('CanActivateCheckoutGuard', () => {
  let guard: CanActivateCheckoutGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanActivateCheckoutGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
