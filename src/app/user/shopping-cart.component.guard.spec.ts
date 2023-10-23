import { TestBed } from '@angular/core/testing';

import { ShoppingCartComponentGuard } from './shopping-cart.component.guard';

describe('ShoppingCartComponentGuard', () => {
  let guard: ShoppingCartComponentGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ShoppingCartComponentGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
