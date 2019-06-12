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

  constructor() {
  }

  ngOnInit() {
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

