import { TestBed } from '@angular/core/testing';

import { RedirectionServiceService } from './redirection-service.service';

describe('RedirectionServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RedirectionServiceService = TestBed.get(RedirectionServiceService);
    expect(service).toBeTruthy();
  });
});
