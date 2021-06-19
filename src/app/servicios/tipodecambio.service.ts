import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { Tipodecambio } from '../modelos/tipodecambio';


@Injectable({
  providedIn: 'root'
})
export class TipodecambioService {

  urlback;

  constructor(
    private http: HttpClient
  ) {
    this.urlback = environment.URL_BACKBANCO;
  }

  listarTipodecambio() {
    let url = this.urlback + "tipodecambio/lista";
    return this.http.get<any[]>(url);
  }

  listarTipodecambioPorMonedaOrigen(obj: any) {
    let url = this.urlback + "tipodecambio/listaMonedaOrigen";
    return this.http.post<any[]>(url, obj);
  }

  registrarTipodecambio(obj: any) {
    let url = this.urlback + "tipodecambio/registrar";
    return this.http.post<any>(url, obj);
  }

  actualizarTipodecambio(obj: any) {
    let url = this.urlback + "tipodecambio/actualizar";
    return this.http.post<any>(url, obj);
  }

  eliminarTipodecambio(obj: any) {
    let url = this.urlback + "tipodecambio/eliminar/" + obj;
    return this.http.delete(url);
  }

  obtenerTipodecambioPorId(obj: any) {
    let url = this.urlback + "tipodecambio/buscar";
    return this.http.post<any>(url, obj);
  }

}
