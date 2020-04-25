import { TestBed } from '@angular/core/testing';

import { AuthoriationService } from './authoriation.service';

describe('AuthoriationService', () => {
  let service: AuthoriationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthoriationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
