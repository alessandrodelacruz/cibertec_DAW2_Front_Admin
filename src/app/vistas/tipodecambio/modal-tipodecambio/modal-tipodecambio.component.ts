import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Tipodecambio } from '../../../modelos/tipodecambio';
import { Moneda } from '../../../modelos/moneda';
import { MonedaService } from '../../../servicios/moneda.service';
import { TipodecambioService } from '../../../servicios/tipodecambio.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
// import swal from 'sweetalert';
declare let swal: any;

@Component({
  selector: 'app-modal-tipodecambio',
  templateUrl: './modal-tipodecambio.component.html',
  styleUrls: ['./modal-tipodecambio.component.css']
})
export class ModalTipodecambioComponent implements OnInit {

  constructor(
    public activeModal: NgbActiveModal,
    private tipodecambioService: TipodecambioService,
    private monedaService: MonedaService) { }

  @Input() obj;
  @Input() accionmodal;
  public tipodecambio: Tipodecambio = new Tipodecambio();
  public IU: any;
  public boton_primario: any;
  public startDate = new Date(1990, 0, 1);
  public form: FormGroup;
  public listaMonedas: Moneda[] = [];
  public lsPerfil: any = [
    {
      iidPerfil: 1,
      nombre: 'USER',
    },
    {
      iidPerfil: 2,
      nombre: 'prueba',
    }
  ];

  ngOnInit(): void {
    this.iniciarModal();
    this.listarMonedas();
  }


  iniciarModal() {

    if (this.accionmodal == 2) {
      this.tipodecambio = new Tipodecambio();
      this.tipodecambio = this.obj;
      this.IU = "ACTUALIZAR";
      this.boton_primario = "Actualizar";
      this.form = new FormGroup({
        'id': new FormControl(this.tipodecambio.id),
        'moneda_origen': new FormControl(this.tipodecambio.moneda_origen.id),
        'moneda_destino': new FormControl(this.tipodecambio.moneda_destino.id),
        'tipo_cambio': new FormControl(this.tipodecambio.tipo_cambio),
        'fecha': new FormControl(this.tipodecambio.fecha),
      });
    } else {
      this.tipodecambio = new Tipodecambio();
      this.IU = "NUEVO";
      this.boton_primario = "Registrar";
      this.form = new FormGroup({
        'id': new FormControl(0),
        'moneda_origen': new FormControl(''),
        'moneda_destino': new FormControl(''),
        'tipo_cambio': new FormControl(''),
        'fecha': new FormControl(''),
      });
    }
  }

  operar(): void {
    let obj = new Tipodecambio();
    obj.id = this.tipodecambio.id;
    obj.moneda_origen = new Moneda();
    obj.moneda_destino = new Moneda();
    obj.moneda_origen.id = this.form.value['moneda_origen'];
    obj.moneda_destino.id = this.form.value['moneda_destino'];
    obj.tipo_cambio = this.form.value['tipo_cambio'];
    obj.fecha = this.form.value['fecha'];
    swal({
      title: '¿Esta seguro?',
      text:
        this.obj.id > 0 ? 'Esta a punto de actualizar el tipo de cambio' :
          'Esta a punto de insertar el tipo de cambio',
      icon: 'warning',
      buttons: true,
      successMode: true,
    })
      .then(opcion => {
        if (opcion) {
          if (obj.id == undefined) {
            this.tipodecambioService.registrarTipodecambio(obj).subscribe(resp => {
              swal('Transaccion correcta', 'Se inserto correctamente el tipo de cambio', 'success');
              this.activeModal.close();
            })
          } else {
            this.tipodecambioService.actualizarTipodecambio(obj).subscribe(resp => {
              swal('Transaccion correcta', 'Se actualizo correctamente el tipo de cambio', 'success');
              this.activeModal.close();
            })
          }
        }
      });
  }



  cancelar() {
    this.activeModal.close({ 'accion': 1 });
  }

  listarMonedas(): void {
    this.monedaService.listarMonedas().subscribe(resp => {
      this.listaMonedas = resp;
    })
  }
}
