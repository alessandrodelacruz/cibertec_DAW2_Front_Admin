import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PrestamoService {

  urlback;

  constructor(
    private http: HttpClient
  ) {
    this.urlback = environment.URL_BACKBANCO;
  }

  listarPrestamoCliente() {
    let url = this.urlback + "prestamoCliente/lista";
    return this.http.get<any>(url);
  }

  registrarPrestamoCliente(obj: any) {
    let url = this.urlback + "prestamoCliente/registrar";
    return this.http.post<any>(url, obj);
  }

  actualizarPrestamoCliente(obj: any) {
    let url = this.urlback + "prestamoCliente/actualizar";
    return this.http.post<any>(url, obj);
  }

  eliminarPrestamoCliente(obj: any) {
    let url = this.urlback + "prestamoCliente/eliminar/" + obj;
    return this.http.delete(url);
  }

  obtenerPrestamoClientePorId(obj: any) {
    let url = this.urlback + "prestamoCliente/buscar";
    return this.http.post<any>(url, obj);
  }
}
