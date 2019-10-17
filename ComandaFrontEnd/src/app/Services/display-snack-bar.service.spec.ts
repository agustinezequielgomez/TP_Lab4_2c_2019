import { TestBed } from '@angular/core/testing';

import { DisplaySnackBarService } from './display-snack-bar.service';

describe('DisplaySnackBarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DisplaySnackBarService = TestBed.get(DisplaySnackBarService);
    expect(service).toBeTruthy();
  });
});
