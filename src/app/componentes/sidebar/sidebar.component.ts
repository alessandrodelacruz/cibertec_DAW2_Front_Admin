import { Component, OnInit } from '@angular/core';
import { CuentaUsuario } from '../../modelos/cuentausuario';
import { ActivationEnd, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(public route: Router) { }

  public objCuentaUsuario: CuentaUsuario = new CuentaUsuario();
  public usu_logueado: Boolean = false;

  ngOnInit(): void {
    
    this.verificar();

  }

  verificar() {
    // .pipe(filter(evento => evento instanceof ActivationEnd),
    //     filter((evento: ActivationEnd) => evento.snapshot.firstChild === null),
    //     map((evento: ActivationEnd) => evento.snapshot.data))

    // this.route.events.subscribe((resp: any) => {
    //   if (resp instanceof NavigationEnd) {
    //     if (resp.url == '/login') {

    //     }
    //   }
    // });
    // this.objCuentaUsuario = JSON.parse(localStorage.getItem('usuario'));
    // if (this.objCuentaUsuario != null) {
    //   this.usu_logueado = true;
    // }
  }

}
