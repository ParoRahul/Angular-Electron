import { TestBed } from '@angular/core/testing';

import { SettingsDbService } from './settings-db.service';

describe('SettingsDbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SettingsDbService = TestBed.get(SettingsDbService);
    expect(service).toBeTruthy();
  });
});
