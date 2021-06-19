import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SolicitudprestamoService {

  urlback;

  constructor(
    private http: HttpClient) 
  {
    this.urlback = environment.URL_BACKBANCO; 
  }

  listarSolicitudPrestamo() {
    let url = this.urlback + "ssolicitudPrestamo/lista";
    return this.http.get<any[]>(url);
  }

  registrarSolicitudPrestamo(obj: any) {
    let url = this.urlback + "ssolicitudPrestamo/registrar";
    return this.http.post<any>(url, obj);
  }

  actualizarSolicitudPrestamo(obj: any) {
    let url = this.urlback + "sSolicitudPrestamo/actualizar";
    return this.http.post<any>(url, obj);
  }

  eliminarSolicitudPrestamo(obj: any) {
    let url = this.urlback + "SsolicitudPrestamo/eliminar/" + obj;
    return this.http.delete(url);
  }

  obtenerSolicitudPrestamoPorId(obj: any) {
    let url = this.urlback + "SsolicitudPrestamo/buscar";
    return this.http.post<any>(url, obj);
  }
}
