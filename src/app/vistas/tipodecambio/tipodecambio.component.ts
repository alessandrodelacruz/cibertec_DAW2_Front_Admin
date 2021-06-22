import { Component, OnInit } from '@angular/core';
import { Tipodecambio } from 'src/app/modelos/tipodecambio';
import { TipodecambioService } from '../../servicios/tipodecambio.service';
import { FormBuilder, FormGroup, FormControl, FormsModule } from '@angular/forms';
import { MonedaService } from '../../servicios/moneda.service';
import { Moneda } from 'src/app/modelos/moneda';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalTipodecambioComponent } from './modal-tipodecambio/modal-tipodecambio.component';
// import swal from 'sweetalert';
declare let swal: any;

@Component({
  selector: 'app-tipodecambio',
  templateUrl: './tipodecambio.component.html',
  styleUrls: ['./tipodecambio.component.css']
})
export class TipodecambioComponent implements OnInit {

  modalRef: NgbModalRef;

  public lista: Tipodecambio[] = [];
  public display: string = 'none';
  public opcmoneda: Moneda;
  public visibletabla: Boolean = true;
  public visibleform: Boolean = false;


  public tipodecambio: Tipodecambio = new Tipodecambio();
  form: FormGroup = new FormGroup({});
  public listaMonedas: Moneda[] = [];
  public IU: any;
  public boton_primario: any;

  constructor(
    private modalService: NgbModal,
    private tipodecambioService: TipodecambioService,
    private monedaService: MonedaService,
  ) { }

  ngOnInit(): void {
    this.listarMonedas();
    this.listar();
  }

  listar(): void {
    this.tipodecambioService.listarTipodecambio().subscribe(resp => {
      this.lista = resp;
    })
  }

  listarFiltro(event: any) {    
    let obj = new Tipodecambio();
    obj.moneda_origen = event;    
    this.tipodecambioService.listarTipodecambioPorMonedaOrigen(obj).subscribe(resp => {
      this.lista = resp;
    })
  }

  eliminar(objeto: any): void {
    swal({
      title: '¿Esta seguro?',
      text: 'Esta a punto de eliminar el tipo de cambio',
      icon: 'warning',
      buttons: true,
      successMode: true,
    })
      .then(opcion => {
        if (opcion) {
          let obj = new Tipodecambio();
          obj.id = objeto.id;
          this.tipodecambioService.eliminarTipodecambio(obj.id).subscribe(resp => {
            swal('Transaccion correcta', 'Se elimino correctamente el tipo de cambio', 'success');
            this.listar();
          })
        }
      });
  }

  openModals(obj: any, acc: number) {
    this.modalRef = this.modalService.open(ModalTipodecambioComponent, { size: 'lg' });
    this.modalRef.componentInstance.obj = obj;
    this.modalRef.componentInstance.accionmodal = acc;
    this.modalRef.result.then((result) => {
      this.listar();
    }, (reason) => {
      
    });
  }

  listarMonedas(): void {
    this.monedaService.listarMonedas().subscribe(resp => {
      this.listaMonedas = resp;
    })
  }


}
