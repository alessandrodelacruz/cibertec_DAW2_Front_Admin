import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CuentaUsuario } from '../../../modelos/cuentausuario';
import { CuentausuarioService } from '../../../servicios/cuentausuario.service';

@Component({
  selector: 'app-abrir-cuenta-digital',
  templateUrl: './abrir-cuenta-digital.component.html',
  styleUrls: ['./abrir-cuenta-digital.component.css']
})
export class AbrirCuentaDigitalComponent implements OnInit {

  constructor(
    private cuentausuarioService: CuentausuarioService
    ) { }

  public form: FormGroup;
  public opcion1: Boolean = true;
  public opcion2: Boolean = false;
  public descripcion_boton: any;
  public correo: String = '';
  public cuentaUsuario: CuentaUsuario = new CuentaUsuario();

  ngOnInit(): void {
    this.formulario();
  }

  formulario() {
    this.descripcion_boton = "Continuar";
    this.opcion1 = true;
    this.opcion2 = false;
    this.form = new FormGroup({
      'id': new FormControl(0),
      'email': new FormControl(''),
      'email2': new FormControl(''),
      'tipo_de_cuenta': new FormControl(''),
      'fecha_nac': new FormControl(''),
      'sexo': new FormControl(''),
      'direccion': new FormControl(''),
      'estado': new FormControl(''),
      'id_distrito': new FormControl(''),
      'nombre': new FormControl(''),
      'apellido': new FormControl(''),
      'documento': new FormControl(''),
    })
  }

  continuar() {
    
    if(this.opcion2 == false){
      this.opcion1 = false;
      this.opcion2 = true;
      this.descripcion_boton = "Confirmar";
      this.correo = this.correo;
    }else{
      let obj = new CuentaUsuario();
      obj.id = this.cuentaUsuario.id;
      obj.email = this.form.value['email'];
      obj.tipo_de_cuenta = this.form.value['tipo_de_cuenta'];
      obj.fecha_nac = this.form.value['fecha_nac'];
      obj.sexo = this.form.value['sexo'];
      obj.direccion = this.form.value['direccion'];
      obj.estado = this.form.value['estado'];
      obj.id_distrito = this.form.value['id_distrito'];
      obj.nombre = this.form.value['nombre'];
      obj.apellido = this.form.value['apellido'];
      obj.documento = this.form.value['documento'];
      
      if (obj.id == undefined) {
        this.cuentausuarioService.registrarCuentaUsuarioC(obj).subscribe(resp => {
          debugger
        })
      }

    } 
  }

  retroceder() {
    this.opcion1 = true;
    this.opcion2 = false;
    this.descripcion_boton = "Continuar";
  }
}