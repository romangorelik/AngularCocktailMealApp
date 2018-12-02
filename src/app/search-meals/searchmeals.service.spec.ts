import { TestBed } from '@angular/core/testing';

import { SearchmealsService } from './searchmeals.service';

describe('SearchmealsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchmealsService = TestBed.get(SearchmealsService);
    expect(service).toBeTruthy();
  });
});
