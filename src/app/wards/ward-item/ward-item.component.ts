import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {WardModel} from '../../employees/models/WardModel';


@Component({
  selector: 'app-ward-item',
  templateUrl: './ward-item.component.html',
  styleUrls: ['./ward-item.component.css']
})
export class WardItemComponent implements OnInit {
  @Input() ward: WardModel;

  @Output() deleteEvent = new EventEmitter<number>();
  @Output() detailsEvent = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }

  onDeleteClick() {
    this.deleteEvent.emit(this.ward.id);
  }

  onDetailsClick() {
    this.detailsEvent.emit(this.ward.id);
  }
}
