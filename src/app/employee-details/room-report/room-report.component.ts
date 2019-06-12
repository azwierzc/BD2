import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ActivatedRoute} from '@angular/router';

import {RoomReportModel} from '../models/RoomReportModel';
import {RoomReportService} from '../../services/room-report.service';

@Component({
  selector: 'app-room-report',
  templateUrl: './room-report.component.html',
  styleUrls: ['./room-report.component.css']
})
export class RoomReportComponent implements OnInit {
  roomRoomReport: RoomReportModel;

  @Input() employeeId: number;
  @Input() employeeName: string;
  @Input() employeeSurname: string;
  @Input() roomId: number;

  constructor(
    private activeModal: NgbActiveModal,
    private route: ActivatedRoute,
    private service: RoomReportService
  ) {
  }

  ngOnInit() {
    this.roomRoomReport = new RoomReportModel();
    this.roomRoomReport.employeeId = this.employeeId;
    this.roomRoomReport.employeeName = this.employeeName;
    this.roomRoomReport.employeeSurname = this.employeeSurname;

    this.roomRoomReport.roomId = this.roomId;
  }

  onSave() {
    this.service.saveRoomReport(this.roomRoomReport);
    this.activeModal.close();
  }

  getDate(date: Date): string {
    return date.toLocaleDateString();
  }

  getTime(date: Date): string {
    return date.toLocaleTimeString();
  }
}
