import { Component, Input, OnInit } from '@angular/core';
import { Cuentabancaria } from 'src/app/modelos/cuentabancaria';
import { CuentaUsuario } from '../../../../modelos/cuentausuario';

@Component({
  selector: 'app-modal-cuentadigital',
  templateUrl: './modal-cuentadigital.component.html',
  styleUrls: ['./modal-cuentadigital.component.css']
})
export class ModalCuentadigitalComponent implements OnInit {
  
  @Input() objrespuesta;
  public cuentaUsuario: CuentaUsuario = new CuentaUsuario();
  public cuentabancaria: Cuentabancaria = new Cuentabancaria();
  constructor() { }

  ngOnInit(): void {
    
    this.cuentaUsuario = this.objrespuesta.defaultObj.cuentaUsuario;
    this.cuentabancaria = this.objrespuesta.defaultObj.cuentaBancaria;
  }

}
