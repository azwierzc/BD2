import { TestBed } from '@angular/core/testing';

import { InstrumentReportService } from './instrument-report.service';

describe('InstrumentReportService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InstrumentReportService = TestBed.get(InstrumentReportService);
    expect(service).toBeTruthy();
  });
});
