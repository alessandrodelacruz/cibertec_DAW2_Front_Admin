import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Prestamocliente } from 'src/app/modelos/prestamocliente';
import { PrestamoService } from 'src/app/servicios/prestamo.service';

declare let swal: any;

@Component({
  selector: 'app-modal-prestamo',
  templateUrl: './modal-prestamo.component.html',
  styleUrls: ['./modal-prestamo.component.css']
})
export class ModalPrestamoComponent implements OnInit {

  constructor( public activeModal: NgbActiveModal,
    private prestamoClienteService: PrestamoService) { }

  lista: Prestamocliente[] = [];

  public prestamocliente: Prestamocliente = new Prestamocliente();
  form: FormGroup = new FormGroup({});
  public IU: any;
  public boton_primario: any;

  ngOnInit(): void {
    this.iniciarModal();
  }

  iniciarModal() {
    if (this.prestamocliente.id != null) {
      this.IU = "ACTUALIZAR";
      this.boton_primario = "Actualizar";
      this.form = new FormGroup({
        'id': new FormControl(this.prestamocliente.id),
        'descripcion': new FormControl(this.prestamocliente.descripcion),
        'monto': new FormControl(this.prestamocliente.monto),
        'plazo': new FormControl(this.prestamocliente.plazo),
        'inicio': new FormControl(this.prestamocliente.inicio),
        'fin': new FormControl(this.prestamocliente.fin),
        'solicitud': new FormControl(this.prestamocliente.solicitud),
      });
    } else {
      this.IU = "NUEVO";
      this.boton_primario = "Registrar";
      this.form = new FormGroup({
        'id': new FormControl(0),
        'descripcion': new FormControl(''),
        'monto': new FormControl(''),
        'plazo': new FormControl(''),
        'inicio': new FormControl(''),
        'fin': new FormControl(''),
        'solicitud': new FormControl(''),
      });
    }
  }

  operar(): void {
    let obj = new Prestamocliente();
    obj.id = this.prestamocliente.id;
    obj.descripcion = this.form.value['descripcion'];
    obj.monto = this.form.value['monto'];
    obj.plazo = this.form.value['plazo'];
    obj.inicio = this.form.value['inicio'];
    obj.fin = this.form.value['fin'];
    obj.solicitud = this.form.value['solicitud'];
    if (obj.id == undefined) {
      this.prestamoClienteService.registrarPrestamoCliente(obj).subscribe(resp => {
        swal('Transaccion correcta', 'Se inserto correctamente el Préstamo', 'success');
        this.activeModal.close();
      })
    } else {
      this.prestamoClienteService.actualizarPrestamoCliente(obj).subscribe(resp => {
        swal('Transaccion correcta', 'Se actualizo correctamente el Préstamo', 'success');
              this.activeModal.close();
      })
    }
  }

  cancelar() {
    this.activeModal.close({ 'accion': 1 });
  }

}
