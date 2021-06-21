import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CuentaUsuario } from '../../../modelos/cuentausuario';
import { CuentausuarioService } from '../../../servicios/cuentausuario.service';
import { Moneda } from '../../../modelos/moneda';
import { MonedaService } from '../../../servicios/moneda.service';
import { Cuentabancaria } from '../../../modelos/cuentabancaria';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalCuentadigitalComponent } from './modal-cuentadigital/modal-cuentadigital.component';
declare let swal: any;

@Component({
  selector: 'app-abrir-cuenta-digital',
  templateUrl: './abrir-cuenta-digital.component.html',
  styleUrls: ['./abrir-cuenta-digital.component.css']
})
export class AbrirCuentaDigitalComponent implements OnInit {

  constructor(
    private cuentausuarioService: CuentausuarioService,
    private monedaService: MonedaService,
    private modalService: NgbModal,
  ) { }

  public form: FormGroup;
  public ventana: Number = 1;
  public descripcion_boton: any;
  public correo: String = '';
  public cuentaUsuario: CuentaUsuario = new CuentaUsuario();
  public listaMonedas: Moneda[] = [];
  public modalRef: NgbModalRef;

  ngOnInit(): void {
    this.listarMonedas();
    this.formulario();
  }

  formulario() {
    this.descripcion_boton = "Continuar";
    this.ventana = 1;
    this.form = new FormGroup({
      'id': new FormControl(0),
      'email': new FormControl(''),
      'email2': new FormControl(''),
      'fecha_nac': new FormControl(''),
      'sexo': new FormControl(''),
      'direccion': new FormControl(''),
      'estado': new FormControl(''),
      'nombre': new FormControl(''),
      'apellido': new FormControl(''),
      'documento': new FormControl(''),
      'clave': new FormControl(''),
      'numerotarjeta': new FormControl(''),
      'moneda_origen': new FormControl(''),
    })
  }

  continuar() {
    if (this.ventana == 1) {
      this.descripcion_boton = "Continuar";
      this.correo = this.correo;
      this.ventana = 2;
    } else if (this.ventana == 2) {
      this.ventana = 3;
      this.descripcion_boton = "Confirmar";
    } else {
      let objCU = new CuentaUsuario();
      objCU.id = this.cuentaUsuario.id;
      objCU.email = this.form.value['email'];
      objCU.fecha_nac = this.form.value['fecha_nac'];
      objCU.sexo = this.form.value['sexo'];
      objCU.direccion = this.form.value['direccion'];
      objCU.estado = this.form.value['estado'];
      objCU.nombre = this.form.value['nombre'];
      objCU.apellido = this.form.value['apellido'];
      objCU.documento = this.form.value['documento'];
      objCU.clave = this.form.value['clave'];
      let objCB = new Cuentabancaria();
      objCB.id_moneda = this.form.value['moneda_origen'];
      if (objCU.id == undefined) {
        swal({
          title: '¿Esta seguro?',
          text: 'Esta a punto de registrarte y crearte una cuenta bancaria',
          icon: 'warning',
          buttons: true,
          successMode: true,
        })
          .then(opcion => {
            if (opcion) {
              this.cuentausuarioService.registrarCuentaUsuarioC({ "cuentaBancaria": objCB, "cuentaUsuario": objCU }).subscribe(resp => {
                this.openPrevisualizarResultado(resp);
                swal('Transaccion correcta', 'Te registraste correctamente el tipo de cambio', 'success');
              })
            }
          })
      }
    }
  }

  retroceder() {
    if (this.ventana == 2) {
      this.ventana = 1;
      this.descripcion_boton = "Continuar";
    } else if (this.ventana == 3) {
      this.ventana = 2;
      this.descripcion_boton = "Continuar";
    }
  }



  listarMonedas(): void {
    this.monedaService.listarMonedas().subscribe(resp => {
      this.listaMonedas = resp;
    })
  }

  openPrevisualizarResultado(obj: any) {
    this.modalRef = this.modalService.open(ModalCuentadigitalComponent, { size: 'md' });
    this.modalRef.componentInstance.objrespuesta = obj;
    this.modalRef.result.then((result) => {
    }, (reason) => {

    });
  }
}