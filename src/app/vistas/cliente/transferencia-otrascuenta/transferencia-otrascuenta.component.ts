import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MonedaService } from '../../../servicios/moneda.service';
import { Moneda } from '../../../modelos/moneda';
import { Cuentabancaria } from '../../../modelos/cuentabancaria';
import { CuentabancariaService } from '../../../servicios/cuentabancaria.service';
import { Transferencia } from '../../../modelos/transferencia';
import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalPrevisualizacionComponent } from './modal-previsualizacion/modal-previsualizacion.component';
import swal from 'sweetalert';

@Component({
  selector: 'app-transferencia-otrascuenta',
  templateUrl: './transferencia-otrascuenta.component.html',
  styleUrls: ['./transferencia-otrascuenta.component.css']
})
export class TransferenciaOtrascuentaComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
    public activeModal: NgbActiveModal,
    private monedaService: MonedaService,
    private cuentaBancariaService: CuentabancariaService,
    private fb: FormBuilder) { }


  form: FormGroup = new FormGroup({});
  public objCuentabancaria: Cuentabancaria = new Cuentabancaria();
  public objTransferencia: Transferencia = new Transferencia();
  public listaMonedas: Moneda[] = [];
  public listaCuentas: Cuentabancaria[] = [];
  public IU: any;
  public boton_primario: any;
  modalRef: NgbModalRef;

  ngOnInit(): void {
    this.iniciarModal();
    this.listarMonedas();
    this.listarCuentaBacarias();
  }

  iniciarModal() {
    this.boton_primario = "Continuar";
    this.form = new FormGroup({
      'id': new FormControl(0),
      'idcuentaorigen': new FormControl(''),
      'cuentadestino': new FormControl(''),
      'idmoneda': new FormControl(''),
      'monto': new FormControl(''),
    });
  }

  listarMonedas(): void {
    this.monedaService.listarMonedas().subscribe(resp => {
      this.listaMonedas = resp;
    })
  }

  listarCuentaBacarias(): void {
    let obj = new Cuentabancaria;
    obj.id_cliente = 30001;
    this.cuentaBancariaService.listarCuentaBancariaPorCliente(obj).subscribe(resp => {
      this.listaCuentas = resp;
    })
  }

  continuar() {
    let obj = new Cuentabancaria;
    obj.numero_cuenta = this.form.value['cuentadestino'];;
    this.cuentaBancariaService.retornaCuentaBancariaPorNumdeCuenta(obj).subscribe(resp => {

      if (resp != null) {
        this.objCuentabancaria = resp;
        let obj = new Transferencia();
        obj.id = 0;
        obj.idcuentaorigen = this.form.value['idcuentaorigen'];
        obj.monto = this.form.value['monto'];
        obj.idmoneda = this.form.value['idmoneda'];
        obj.idcuentadestino = this.objCuentabancaria;
        this.modalRef = this.modalService.open(ModalPrevisualizacionComponent, { size: 'md' });
        this.modalRef.componentInstance.obj = obj;
        this.modalRef.result.then((result) => {
          // this.listar();      
        }, (reason) => {
        });
      } else {
        swal('Error', 'No existe la cuenta de destino.', 'warning');
      }
    })
  }


  cancelar() {
    this.activeModal.close({ 'accion': 1 });
    // $('a[data-toggle="tooltip"]').tooltip('hide');
  }

}
