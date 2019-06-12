import { TestBed } from '@angular/core/testing';

import { RoomReportService } from './room-report.service';

describe('RoomReportService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoomReportService = TestBed.get(RoomReportService);
    expect(service).toBeTruthy();
  });
});
