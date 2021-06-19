import { Component, OnInit } from '@angular/core';
import { CuentausuarioService } from '../../servicios/cuentausuario.service';
import { CuentaUsuario } from '../../modelos/cuentausuario';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cuentausuario',
  templateUrl: './cuentausuario.component.html',
  styleUrls: ['./cuentausuario.component.css']
})
export class CuentausuarioComponent implements OnInit {  
  
  lista: CuentaUsuario[] = [];





  public cuentaUsuario: CuentaUsuario = new CuentaUsuario();
  form: FormGroup = new FormGroup({});
  public IU: any;
  public boton_primario: any;

  constructor(
    private cuentausuarioService: CuentausuarioService) { }

  ngOnInit(): void {
    this.listar();

    this.iniciarModal();
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
    if (acc == 1) {
      this.cuentaUsuario = new CuentaUsuario();
    } else {
      this.cuentaUsuario = new CuentaUsuario();
      this.cuentaUsuario = obj;
    }
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
      this.cuentausuarioService.registrarCuentaUsuario(obj).subscribe(resp => {
        this.listar();
      })
    } else {
      this.cuentausuarioService.actualizarCuentaUsuario(obj).subscribe(resp => {
        this.listar();
      })
    }
  } 

  cancelar() {
    // this.dialogRef.close();
  }

}