import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ActivatedRoute} from '@angular/router';

import {InstrumentReportModel} from '../models/InstrumentReportModel';
import {InstrumentReportService} from '../../services/instrument-report.service';

@Component({
  selector: 'app-instrument-report',
  templateUrl: './instrument-report.component.html',
  styleUrls: ['./instrument-report.component.css']
})
export class InstrumentReportComponent implements OnInit {
  instrumentReport: InstrumentReportModel;

  @Input() employeeId: number;
  @Input() employeeName: string;
  @Input() employeeSurname: string;
  @Input() instrumentId: number;

  constructor(
    private activeModal: NgbActiveModal,
    private route: ActivatedRoute,
    private service: InstrumentReportService
  ) {
  }

  ngOnInit() {
    this.instrumentReport = new InstrumentReportModel();
    this.instrumentReport.employeeId = this.employeeId;
    this.instrumentReport.employeeName = this.employeeName;
    this.instrumentReport.employeeSurname = this.employeeSurname;

    this.instrumentReport.instrumentId = this.instrumentId;
  }

  onSave() {
    this.service.saveInstrumentReport(this.instrumentReport);
    this.activeModal.close();
  }

  getDate(date: Date): string {
    return date.toLocaleDateString();
  }

  getTime(date: Date): string {
    return date.toLocaleTimeString();
  }
}
