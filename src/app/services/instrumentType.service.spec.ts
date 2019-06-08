import { TestBed } from '@angular/core/testing';

import { InstrumentTypeService } from './instrumentType.service';

describe('InstrumentTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InstrumentTypeService = TestBed.get(InstrumentTypeService);
    expect(service).toBeTruthy();
  });
});
