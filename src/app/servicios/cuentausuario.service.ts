import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CuentausuarioService {

  urlback;

  constructor(
    private http: HttpClient
  ) {
    this.urlback = environment.URL_BACKBANCO;
  }

  listarCuentaUsuario() {
    let url = this.urlback + "cuentaUsuario/lista";
    
    return this.http.get<any[]>(url);
  }

  registrarCuentaUsuario(obj: any) {
    let url = this.urlback + "cuentaUsuario/registrar";
    return this.http.post<any>(url, obj);
  }

  registrarCuentaUsuarioC(objcu:any) {
    
    let url = this.urlback + "cuentaUsuario/registrarC";
    return this.http.post<any>(url, objcu);
  }

  actualizarCuentaUsuario(obj: any) {
    let url = this.urlback + "cuentaUsuario/actualizar";
    return this.http.post<any>(url, obj);
  }

  eliminarCuentaUsuario(obj: any) {
    let url = this.urlback + "cuentaUsuario/eliminar/" + obj;
    return this.http.delete(url);
  }

  obtenerCuentaUsuarioPorId(obj: any) {
    let url = this.urlback + "cuentaUsuario/buscar";
    return this.http.post<any>(url, obj);
  }

  verificarUsuario(obj: any) {
    let url = this.urlback + "cuentaUsuario/listarPorCuenta";
    return this.http.post<any>(url, obj);
  }

}
