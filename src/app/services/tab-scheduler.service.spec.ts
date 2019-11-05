import { TestBed } from '@angular/core/testing';

import { TabScheduler } from './tab.scheduler.service';

describe('TabSchedulerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TabScheduler = TestBed.get(TabScheduler);
    expect(service).toBeTruthy();
  });
});
