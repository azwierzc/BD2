import {Component, OnInit} from '@angular/core';
import {InstrumentModel} from './models/InstrumentModel';
import {InstrumentService} from '../services/instrument.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {InstrumentToAddModel} from './models/InstrumentToAddModel';
import {InstrumentTypeService} from '../services/instrumentType.service';
import {Router} from '@angular/router';
import {debounceTime} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-instruments',
  templateUrl: './instruments.component.html',
  styleUrls: ['./instruments.component.css']
})
export class InstrumentsComponent implements OnInit {

  private alert = new Subject<string>();
  private alertS = new Subject<string>();
  private alertP = new Subject<string>();
  staticAlertClosed = false;
  alertMessage: string;
  alertMessageS: string;
  alertMessageP: string;
  instrumentsList: InstrumentModel[];
  instrumentToAdd: InstrumentToAddModel;


  constructor(private service: InstrumentService,
              private instrumentTypesService: InstrumentTypeService,
              private modalService: NgbModal,
              private router: Router
  ) {
  }

  ngOnInit() {
    this.instrumentToAdd = new InstrumentToAddModel();
    this.resolveInstruments();
    setTimeout(() => this.staticAlertClosed = true, 20000);
    this.alert.subscribe((message) => this.alertMessage = message);
    this.alertS.subscribe((messageS) => this.alertMessageS = messageS);
    this.alertP.subscribe((messageS) => this.alertMessageP = messageS);
    this.alert.pipe(debounceTime(5000)).subscribe(() => this.alertMessage = null);
    this.alertS.pipe(debounceTime(5000)).subscribe(() => this.alertMessageS = null);
    this.alertP.pipe(debounceTime(5000)).subscribe(() => this.alertMessageP = null);
  }

  resolveInstruments() {
    this.service.fetchInstrumentsList().then((list: InstrumentModel[]) => this.instrumentsList = list);
  }

  onDeleteEvent(id: number) {
    this.service.deleteInstrument(id).then(() => this.resolveInstruments()).catch((error) => this.viewMessage());
    this.alert.pipe(debounceTime(5000)).subscribe(() => this.alertMessage = null);
  }

  onDetailsEvent(id: number) {
    this.router.navigate(['instruments/' + id]);
  }

  onAddInstrumentClick(modal) {
    this.modalService.open(modal, {ariaLabelledBy: 'modal-basic-title'});
  }

  saveReport(modal) {
    if (!this.instrumentToAdd.serialNumber || !this.instrumentToAdd.type) {this.viewMessageP(modal); }
    this.service.saveInstrument(this.instrumentToAdd).then(() => this.resolveInstruments()).then(() => modal.close())
      .catch((error) => this.viewMessageS());
  }

  viewMessage() {
    this.alert.next('Brak uprawnień do usunięcia urządzenia.');
  }

  viewMessageS() {
    this.alertS.next('Brak uprawnień do dodania urządzenia');
  }

  viewMessageP(modal) {
    this.alertS.next('Uzupełnij numer seryjny i typ urządzenia');
    this.onAddInstrumentClick(modal);
  }
}
