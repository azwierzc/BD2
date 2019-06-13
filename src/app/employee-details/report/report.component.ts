import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import {ActivatedRoute, Router} from '@angular/router';

import {ReportModel} from '../models/ReportModel';
import {ReportService} from '../../services/report.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  reportTypeOptions: string[] = ['Awaria sprzętu', 'Awaria sali', 'Brak asortymentu', 'Pobranie'];
  report: ReportModel;
  private alert = new Subject<string>();
  staticAlertClosed = false;
  alertMessage: string;
  @Input() employeeId: number;
  @Input() employeeName: string;
  @Input() type: string;

  constructor(
    private activeModal: NgbActiveModal,
    private route: ActivatedRoute,
    private service: ReportService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.report = new ReportModel();
    this.report.employeeId = this.employeeId;
    this.report.employeeName = this.employeeName;
    this.report.reportType = this.type;
    setTimeout(() => this.staticAlertClosed = true, 20000);
    this.alert.subscribe((message) => this.alertMessage = message);
  }


  onSave() {
    if (this.report.reportType === 'Awaria sprzętu') {
      this.report.reportType = 'INSTRUMENT_MALFUNCTION';
    } else if (this.report.reportType === 'Awaria sali') {
      this.report.reportType = 'ROOM_MALFUNCTION';
    } else if (this.report.reportType === 'Brak asortymentu') {
      this.report.reportType = 'SUPPLY_SHORTAGE';
    } else if (this.report.reportType === 'Pobranie') {
      this.report.reportType = 'WITHDRAWAL';
    }
    if (!this.report.content) {};

    this.service.saveReport(this.report).then(() => this.router.navigate(['/employees']))
      .then(() => this.activeModal.close()).catch((error) => this.viewMessage());
    // this.router.navigate(['/employees']);
    // this.activeModal.close();
  }

  getDate(date: Date): string {
    return date.toLocaleDateString();
  }

  getTime(date: Date): string {
    return date.toLocaleTimeString();
  }

  viewMessage() {
    this.alert.next('Dodaj treść do raportu.');
  }
}
