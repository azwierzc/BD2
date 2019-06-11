import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomReservationItemComponent } from './room-reservation-item.component';

describe('RoomReservationItemComponent', () => {
  let component: RoomReservationItemComponent;
  let fixture: ComponentFixture<RoomReservationItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomReservationItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomReservationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
