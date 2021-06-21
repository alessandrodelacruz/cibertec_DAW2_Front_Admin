import { Component, OnInit } from '@angular/core';
import { CuentausuarioService } from '../../../servicios/cuentausuario.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { CuentaUsuario } from '../../../modelos/cuentausuario';
import { Router } from '@angular/router';

// import { BasketWrapperService } from 'src/app/app.component';
// import { SidebarComponent } from '../../../componentes/sidebar/sidebar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public cuentaUsuarioForm: FormGroup; // formulario en blanco

  constructor(
    private cuentausuarioService: CuentausuarioService,
    // private sidebar: SidebarComponent, 
    // private basketService: BasketWrapperService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.setear();
    this.cuentaUsuarioForm = new FormGroup({
      'numerotarjeta': new FormControl(''),
      'clave': new FormControl('')
    });
  }



  setear() {
    localStorage.setItem('usuario', "aprendiendo usar storage");
  }


  verificarLogin(): void {
    let obj = new CuentaUsuario();
    obj.numerotarjeta = this.cuentaUsuarioForm.value['numerotarjeta'];
    obj.clave = this.cuentaUsuarioForm.value['clave'];
    this.cuentausuarioService.verificarUsuario(obj).subscribe(resp => {
      console.log("login", resp);
      localStorage.setItem('usuario', JSON.stringify(resp));
      this.router.navigate(['/cuentaDigitalInicioComponent']);
      this.callMe();
    })
  }

  public callMe(): void {
    // this.sidebar.ngOnInit();
  }

}
