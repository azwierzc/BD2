import {Component, OnInit} from '@angular/core';
import {ReportModel} from '../employee-details/models/ReportModel';
import {ReportService} from '../services/report.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

import {Router} from '@angular/router';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  reportsList: ReportModel[];
  report: ReportModel;

  constructor(
    private service: ReportService,
    private modalService: NgbModal,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.report = new ReportModel();
    this.resolveReports();
  }

  resolveReports() {
    this.service.fetchReportsList().then((list: ReportModel[]) => this.reportsList = list);
  }

  onDeleteEvent(id: number) {
    this.service.deleteReport(id).then(() => this.resolveReports());
  }

  onDetailsEvent(id: number) {
    this.router.navigate(['reports/' + id]);
  }

  onAddReportClick(modal) {
    this.modalService.open(modal, {ariaLabelledBy: 'modal-basic-title'});
  }

  saveReport(modal) {
    this.service.saveReport(this.report).then(() => this.resolveReports());
    modal.close();
  }
}
