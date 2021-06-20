import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';
import { TransferenciaOtrascuentaComponent } from '../vistas/cliente/transferencia-otrascuenta/transferencia-otrascuenta.component';

@Component({
  selector: 'app-tipotransferencia',
  templateUrl: './tipotransferencia.component.html',
  styleUrls: ['./tipotransferencia.component.css']
})
export class TipotransferenciaComponent implements OnInit {

  modalRef: NgbModalRef;

  constructor(private modalService: NgbModal) {
   }

  ngOnInit(): void {
  }

  openModalMantenimientp() {
    this.modalRef = this.modalService.open(ModalComponent, { size: 'lg' });
    this.modalRef.result.then((result) => {   
    }, (reason) => {
    });
  }

  openModaltrans() {
    this.modalRef = this.modalService.open(TransferenciaOtrascuentaComponent, { size: 'md' });
    // this.modalRef.componentInstance.obj = event;
    // this.modalRef.componentInstance.accionmodal = event;
    this.modalRef.result.then((result) => {

    }, (reason) => {
      
    });
  }
}
