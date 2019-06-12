import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentReservationItemComponent } from './instrument-reservation-item.component';

describe('InstrumentReservationItemComponent', () => {
  let component: InstrumentReservationItemComponent;
  let fixture: ComponentFixture<InstrumentReservationItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstrumentReservationItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentReservationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
