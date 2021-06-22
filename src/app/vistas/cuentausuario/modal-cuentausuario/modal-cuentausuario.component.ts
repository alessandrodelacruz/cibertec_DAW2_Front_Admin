import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CuentaUsuario } from 'src/app/modelos/cuentausuario';
import { CuentausuarioService } from 'src/app/servicios/cuentausuario.service';

declare let swal: any;

@Component({
  selector: 'app-modal-cuentausuario',
  templateUrl: './modal-cuentausuario.component.html',
  styleUrls: ['./modal-cuentausuario.component.css']
})
export class ModalCuentausuarioComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal,
    private cuentaUsuarioService: CuentausuarioService) { }

    lista: CuentaUsuario[] = [];

    public cuentaUsuario: CuentaUsuario = new CuentaUsuario();
    form: FormGroup = new FormGroup({});
    public IU: any;
    public boton_primario: any;

  ngOnInit(): void {
    this.iniciarModal();
  }

  iniciarModal() {
    if (this.cuentaUsuario.id != null) {
      this.IU = "ACTUALIZAR";
      this.boton_primario = "Actualizar";
      this.form = new FormGroup({
        'id': new FormControl(this.cuentaUsuario.id),
        'email': new FormControl(this.cuentaUsuario.email),
        'tipo_de_cuenta': new FormControl(this.cuentaUsuario.tipo_de_cuenta),
        'fecha_nac': new FormControl(this.cuentaUsuario.fecha_nac),
        'sexo': new FormControl(this.cuentaUsuario.sexo),
        'direccion': new FormControl(this.cuentaUsuario.direccion),
        'estado': new FormControl(this.cuentaUsuario.estado),
        'id_distrito': new FormControl(this.cuentaUsuario.id_distrito),
      });
    } else {
      this.IU = "NUEVO";
      this.boton_primario = "Registrar";
      this.form = new FormGroup({
        'id': new FormControl(0),
        'email': new FormControl(''),
        'tipo_de_cuenta': new FormControl(''),
        'fecha_nac': new FormControl(''),
        'sexo': new FormControl(''),
        'direccion': new FormControl(''),
        'estado': new FormControl(''),
        'id_distrito': new FormControl(''),
      });
    }
  }

  operar(): void {
    let obj = new CuentaUsuario();
    obj.id = this.cuentaUsuario.id;
    obj.email = this.form.value['email'];
    obj.tipo_de_cuenta = this.form.value['tipo_de_cuenta'];
    obj.fecha_nac = this.form.value['fecha_nac'];
    obj.sexo = this.form.value['sexo'];
    obj.direccion = this.form.value['direccion'];
    obj.estado = this.form.value['estado'];
    obj.id_distrito = this.form.value['id_distrito'];
    
    if (obj.id == undefined) {
      this.cuentaUsuarioService.registrarCuentaUsuario(obj).subscribe(resp => {
        swal('Transaccion correcta', 'Se inserto correctamente la Cuenta del Usuario', 'success');
        this.activeModal.close();
      })
    } else {
      this.cuentaUsuarioService.actualizarCuentaUsuario(obj).subscribe(resp => {
        swal('Transaccion correcta', 'Se actualizo correctamente la Cuenta del Usuario', 'success');
              this.activeModal.close();
      })
    }
  } 

  cancelar() {
    this.activeModal.close({ 'accion': 1 });
  }

}
