import {Component, OnInit} from '@angular/core';


import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

import {Router} from '@angular/router';
import {WardModel} from '../employees/models/WardModel';
import {WardService} from '../services/ward.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-wards',
  templateUrl: './wards.component.html',
  styleUrls: ['./wards.component.css']
})
export class WardsComponent implements OnInit {
  private alert = new Subject<string>();
  private alertS = new Subject<string>();
  staticAlertClosed = false;
  alertMessage: string;
  alertMessageS: string;
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
    setTimeout(() => this.staticAlertClosed = true, 20000);
    this.alert.subscribe((message) => this.alertMessage = message);
    this.alertS.subscribe((messageS) => this.alertMessageS = messageS);
  }

  resolveWards() {
    this.service.fetchWardsList().then((list: WardModel[]) => this.wardsList = list);
  }

  onDeleteEvent(id: number) {
    this.service.deleteWard(id).then(() => this.resolveWards()).catch((error) => this.viewMessage());
  }

  onDetailsEvent(id: number) {
    this.router.navigate(['wards/' + id]);
  }

  onAddWardClick(modal) {
    this.modalService.open(modal, {ariaLabelledBy: 'modal-basic-title'});
  }

  saveReport(modal) {
    this.service.saveWard(this.wardToAdd).then(() => this.resolveWards()).then(() => modal.close())
      .catch((error) => this.viewMessageS());
  }

  viewMessage() {
    this.alert.next('Brak uprawnień do usunięcia oddziału.');
  }

  viewMessageS() {
    this.alertS.next('Brak uprawnień do dodania oddziału');
  }
}
