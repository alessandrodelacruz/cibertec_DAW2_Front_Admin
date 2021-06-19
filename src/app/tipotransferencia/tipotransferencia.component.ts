import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';

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

  openModals() {
    this.modalRef = this.modalService.open(ModalComponent, { size: 'lg' });
    this.modalRef.result.then((result) => {   
    }, (reason) => {
    });
  }
}
