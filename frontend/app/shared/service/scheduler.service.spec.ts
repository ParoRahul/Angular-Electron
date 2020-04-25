import { TestBed } from '@angular/core/testing';

import { SchedulerService } from './scheduler.service';
import { SchedulerData } from '../model/schedulerData';


describe('SchedulerService', () => {
  let service: SchedulerService;
  let datatemplete: SchedulerData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchedulerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should assert Templete members', () => {
    service.serveScheduler().subscribe((template: SchedulerData) => {
      expect(template.type).toBe('testing');
      expect(template.component).toBe('tesingComponent');
    });
    datatemplete = {type: 'testing' , component: 'tesingComponent'};
    service.schedulerRequest(datatemplete);
  })

  it('Should assert Templete members', () => {
    service.serveScheduler().subscribe((template: SchedulerData) => {
      expect(template).toBeUndefined();
    });
    service.clearcatche();
  })

});
