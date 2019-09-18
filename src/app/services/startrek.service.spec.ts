import { TestBed } from '@angular/core/testing';

import { StartrekService } from './startrek.service';

describe('StartrekService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StartrekService = TestBed.get(StartrekService);
    expect(service).toBeTruthy();
  });
});
