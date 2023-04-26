import { TestBed } from '@angular/core/testing';

import { Check1Guard } from './check1.guard';

describe('Check1Guard', () => {
  let guard: Check1Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(Check1Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
