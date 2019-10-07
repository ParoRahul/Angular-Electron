import { TestBed } from '@angular/core/testing';

import { AuthoriationService } from './authoriation.service';

describe('AuthoriationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthoriationService = TestBed.get(AuthoriationService);
    expect(service).toBeTruthy();
  });
});
