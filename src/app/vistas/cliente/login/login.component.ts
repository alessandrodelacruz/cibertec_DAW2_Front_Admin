import { Component, OnInit } from '@angular/core';
import { CuentausuarioService } from '../../../servicios/cuentausuario.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { CuentaUsuario } from 'src/app/modelos/cuentausuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

// cuentaUsuarioForm:FormGroup=new FormGroup({});
public cuentaUsuarioForm: FormGroup; // formulario en blanco
// public form: FormGroup;
  constructor(private cuentausuarioService: CuentausuarioService, 
    public router: Router,
    ) { }

  ngOnInit(): void {
    this.setear();
    this.cuentaUsuarioForm = new FormGroup({
      'numerotarjeta': new FormControl(''),
      'clave': new FormControl('')
    });
  }

  

  setear(){
    localStorage.setItem('usuario',"aprendiendo usar storage");
  }
  
  
  verificarLogin(): void {

    let obj = new CuentaUsuario();
    obj.numerotarjeta = this.cuentaUsuarioForm.value['numerotarjeta'];
    obj.clave = this.cuentaUsuarioForm.value['clave'];
    this.cuentausuarioService.verificarUsuario(obj).subscribe(resp => {
      console.log("login",resp); 
      localStorage.setItem('usuario', JSON.stringify(resp)); 
      this.router.navigate(['/cuentaDigitalInicioComponent']);
      
    })
  }

}
