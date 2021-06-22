import { Component, OnInit } from '@angular/core';
import { TransferenciaService } from '../../../servicios/transferencia.service';
import { Transferencia } from '../../../modelos/transferencia';
import { Cuentabancaria } from '../../../modelos/cuentabancaria';
import { CuentabancariaService } from '../../../servicios/cuentabancaria.service';
import { CuentaUsuario } from '../../../modelos/cuentausuario';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { TransferenciaOtrascuentaComponent } from '../transferencia-otrascuenta/transferencia-otrascuenta.component';
import { ModalComponent } from '../../../tipotransferencia/modal/modal.component';

@Component({
  selector: 'app-cuenta-digital-inicio',
  templateUrl: './cuenta-digital-inicio.component.html',
  styleUrls: ['./cuenta-digital-inicio.component.css']
})
export class CuentaDigitalInicioComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
    private transferenciaService: TransferenciaService,
    private cuentabancariaService: CuentabancariaService,) { }

  public listaTransferencias: Transferencia[] = [];
  public listaCuentabancaria: Cuentabancaria[] = [];
  public objCuentaUsuario: CuentaUsuario =  new CuentaUsuario();
  public modalRef: NgbModalRef;

  ngOnInit(): void {
    
    this.objCuentaUsuario = JSON.parse(localStorage.getItem('usuario'));
    this.listarCuentaBancariaPorCliente();
  }
  
  listarTransferenciaPorCuenta(event: any) {
    let obj = new Transferencia();
    let objc = new Cuentabancaria();
    objc.id = event.id;
    obj.idcuentaorigen = objc;
    this.transferenciaService.listarTransferenciaPorCuentaBancaria(obj).subscribe(resp => {
      this.listaTransferencias = resp;
    })
  }

  listarCuentaBancariaPorCliente() {
    let obj = new Cuentabancaria();
    obj.id_cliente = this.objCuentaUsuario;
    this.cuentabancariaService.listarCuentaBancariaPorCliente(obj).subscribe(resp => {
      this.listaCuentabancaria = resp;
      console.log("listaCuentabancaria", this.listaCuentabancaria)
    })
  }

  openModalMantenimientp() {
    this.modalRef = this.modalService.open(ModalComponent, { size: 'lg' });
    this.modalRef.result.then((result) => {   
    }, (reason) => {
    });
  }


  



}
