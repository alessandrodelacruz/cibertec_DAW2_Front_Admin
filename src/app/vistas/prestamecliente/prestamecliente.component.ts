import { Component, OnInit } from '@angular/core';
import { PrestamoService } from '../../servicios/prestamo.service';
import { Prestamocliente } from '../../modelos/prestamocliente';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalPrestamoComponent } from './modal-prestamo/modal-prestamo.component';

@Component({
  selector: 'app-prestamecliente',
  templateUrl: './prestamecliente.component.html',
  styleUrls: ['./prestamecliente.component.css']
})
export class PrestameclienteComponent implements OnInit {

  modalRef: NgbModalRef;

  lista: Prestamocliente[] = [];

  public prestamocliente: Prestamocliente = new Prestamocliente();
  form: FormGroup = new FormGroup({});
  public IU: any;
  public boton_primario: any;

  constructor(private modalService: NgbModal,
    private prestamoClienteService: PrestamoService) { }

  ngOnInit(): void {
    this.listar();

  }

  listar(): void {
    this.prestamoClienteService.listarPrestamoCliente().subscribe(resp => {
      this.lista = resp;
    })
  }
  
  eliminar(objeto: any): void {
    let obj = new Prestamocliente();
    obj.id = objeto.id;
    
    this.prestamoClienteService.eliminarPrestamoCliente(obj.id).subscribe(resp => {
      this.listar();
    })
  }

  openModals(obj: any, acc: number) {
    this.modalRef = this.modalService.open(ModalPrestamoComponent, { size: 'lg' });
    this.modalRef.componentInstance.obj = obj;
    this.modalRef.componentInstance.accionmodal = acc;
    this.modalRef.result.then((result) => {
      this.listar();
    }, (reason) => {
      
    });
  }
}
