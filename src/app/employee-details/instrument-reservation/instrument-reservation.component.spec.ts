import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentReservationComponent } from './instrument-reservation.component';

describe('InstrumentReservationComponent', () => {
  let component: InstrumentReservationComponent;
  let fixture: ComponentFixture<InstrumentReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstrumentReservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
