import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ReportModel} from '../../models/ReportModel';

@Component({
  selector: 'app-report-item',
  templateUrl: './report-item.component.html',
  styleUrls: ['./report-item.component.css']
})
export class ReportItemComponent implements OnInit {
  @Input() report: ReportModel;
  @Input() isEmployeeView: boolean;
  @Output() deleteEvent = new EventEmitter<number>();

  reportType: string;

  constructor() {
  }

  ngOnInit() {
    if (this.report.reportType === 'INSTRUMENT_MALFUNCTION') {
      this.reportType = 'Awaria sprzętu';
    } else if (this.report.reportType === 'ROOM_MALFUNCTION') {
      this.reportType = 'Awaria sali';
    } else if (this.report.reportType === 'SUPPLY_SHORTAGE') {
      this.reportType = 'Brak asortymentu';
    } else if (this.report.reportType === 'WITHDRAWAL') {
      this.reportType = 'Pobranie';
    }
  }

  onDeleteClick() {
    this.deleteEvent.emit(this.report.id);
  }

  public getDate(date: Date): string {
    const newDate = new Date(date);
    return newDate.toLocaleDateString();
  }

  public getTime(date: Date): string {
    const newDate = new Date(date);
    return newDate.toLocaleTimeString();
  }

}

