import { Component, OnInit } from '@angular/core';
import { TransferenciaService } from '../../../servicios/transferencia.service';
import { Transferencia } from '../../../modelos/transferencia';
import { Cuentabancaria } from '../../../modelos/cuentabancaria';
import { CuentabancariaService } from '../../../servicios/cuentabancaria.service';
import { CuentaUsuario } from '../../../modelos/cuentausuario';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { TransferenciaOtrascuentaComponent } from '../transferencia-otrascuenta/transferencia-otrascuenta.component';

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

  constante_idcliente = 30001;
  public listaTransferencias: Transferencia[] = [];
  public listaCuentabancaria: Cuentabancaria[] = [];
  public modalRef: NgbModalRef;

  ngOnInit(): void {
    // this.listarTransferenciaPorCuenta(null);
    this.listarCuentaBancariaPorCliente(null);
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

  listarCuentaBancariaPorCliente(event: any) {    
    // const value = event.target.value;
    let obj = new Cuentabancaria();
    obj.id_cliente = this.constante_idcliente;
    this.cuentabancariaService.listarCuentaBancariaPorCliente(obj).subscribe(resp => {
      this.listaCuentabancaria = resp;
    })
  }


  

  openModals(event: any) {
    this.modalRef = this.modalService.open(TransferenciaOtrascuentaComponent, { size: 'md' });
    this.modalRef.componentInstance.obj = event;
    this.modalRef.componentInstance.accionmodal = event;
    this.modalRef.result.then((result) => {

    }, (reason) => {
      
    });
  }

}
