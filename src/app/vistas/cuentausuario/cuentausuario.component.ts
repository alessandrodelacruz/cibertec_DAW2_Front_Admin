import { Component, OnInit } from '@angular/core';
import { CuentausuarioService } from '../../servicios/cuentausuario.service';
import { CuentaUsuario } from '../../modelos/cuentausuario';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalCuentausuarioComponent } from './modal-cuentausuario/modal-cuentausuario.component';

@Component({
  selector: 'app-cuentausuario',
  templateUrl: './cuentausuario.component.html',
  styleUrls: ['./cuentausuario.component.css']
})
export class CuentausuarioComponent implements OnInit {  
  
  modalRef: NgbModalRef;

  lista: CuentaUsuario[] = [];

  constructor(private modalService: NgbModal,
    private cuentausuarioService: CuentausuarioService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(): void {
    this.cuentausuarioService.listarCuentaUsuario().subscribe(resp => {
      this.lista = resp;        
    })
  }
  
  eliminar(objeto: CuentaUsuario): void {
    let obj = new CuentaUsuario();
    obj.id = objeto.id;
    
    this.cuentausuarioService.eliminarCuentaUsuario(obj.id).subscribe(resp => {
      this.listar();
    })
  }

  openModal(obj: any, acc: number) {
    this.modalRef = this.modalService.open(ModalCuentausuarioComponent, { size: 'lg' });
    this.modalRef.componentInstance.obj = obj;
    this.modalRef.componentInstance.accionmodal = acc;
    this.modalRef.result.then((result) => {
      this.listar();
    }, (reason) => {
      
    });
  }

}