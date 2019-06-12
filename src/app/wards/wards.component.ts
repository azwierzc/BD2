import {Component, OnInit} from '@angular/core';


import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

import {Router} from '@angular/router';
import {WardModel} from '../employees/models/WardModel';
import {WardService} from '../services/ward.service';

@Component({
  selector: 'app-wards',
  templateUrl: './wards.component.html',
  styleUrls: ['./wards.component.css']
})
export class WardsComponent implements OnInit {

  wardsList: WardModel[];
  wardToAdd: WardModel;

  constructor(
    private service: WardService,
    private modalService: NgbModal,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.wardToAdd = new WardModel();
    this.resolveWards();
  }

  resolveWards() {
    this.service.fetchWardsList().then((list: WardModel[]) => this.wardsList = list);
  }

  onDeleteEvent(id: number) {
    this.service.deleteWard(id).then(() => this.resolveWards());
  }

  onDetailsEvent(id: number) {
    this.router.navigate(['wards/' + id]);
  }

  onAddWardClick(modal) {
    this.modalService.open(modal, {ariaLabelledBy: 'modal-basic-title'});
  }

  saveReport(modal) {
    this.service.saveWard(this.wardToAdd).then(() => this.resolveWards());
    modal.close();
  }
}
