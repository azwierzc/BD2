import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentReportComponent } from './instrument-report.component';

describe('InstrumentReportComponent', () => {
  let component: InstrumentReportComponent;
  let fixture: ComponentFixture<InstrumentReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstrumentReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
