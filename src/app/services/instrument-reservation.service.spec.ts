import { TestBed } from '@angular/core/testing';

import { InstrumentReservationService } from './instrument-reservation.service';

describe('InstrumentReservationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InstrumentReservationService = TestBed.get(InstrumentReservationService);
    expect(service).toBeTruthy();
  });
});
