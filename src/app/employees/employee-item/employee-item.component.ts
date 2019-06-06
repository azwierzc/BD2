import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EmployeeModel} from '../models/EmployeeModel';

@Component({
  selector: 'app-employee-item',
  templateUrl: './employee-item.component.html',
  styleUrls: ['./employee-item.component.css']
})
export class EmployeeItemComponent implements OnInit {
  @Input() employee: EmployeeModel;

  @Output() deleteEvent = new EventEmitter<number>();
  @Output() detailsEvent = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }

  onDeleteClick() {
    this.deleteEvent.emit(this.employee.id);
  }

  onDetailsClick() {
    this.detailsEvent.emit(this.employee.id);
  }

}
