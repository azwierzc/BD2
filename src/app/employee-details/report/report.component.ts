import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import {ActivatedRoute} from '@angular/router';

import {ReportModel} from '../models/ReportModel';
import {ReportService} from '../../services/report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  report: ReportModel;

  @Input() employeeId: number;
  @Input() employeeName: string;
  @Input() type: string;

  constructor(
    private activeModal: NgbActiveModal,
    private route: ActivatedRoute,
    private service: ReportService
  ) {
  }

  ngOnInit() {
    this.report = new ReportModel();
    this.report.employeeId = this.employeeId;
    this.report.employeeName = this.employeeName;
    this.report.type = this.type;

  }

  onSave() {
    this.service.saveReport(this.report);
    this.activeModal.close();
  }

  getDate(date: Date): string {
    return date.toLocaleDateString();
  }

  getTime(date: Date): string {
    return date.toLocaleTimeString();
  }
}
