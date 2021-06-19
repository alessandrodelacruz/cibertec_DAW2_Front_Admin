import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PromocionesService {

  urlback;

  constructor(
    private http: HttpClient
  ) {
    this.urlback = environment.URL_BACKBANCO;
  }

  listarPromociones() {
    let url = this.urlback + "promociones/lista";
    return this.http.get<any>(url);
  }

  registrarPromociones(obj: any) {
    let url = this.urlback + "promociones/registrar";
    return this.http.post<any>(url, obj);
  }

  actualizarPromociones(obj: any) {
    let url = this.urlback + "promociones/actualizar";
    return this.http.post<any>(url, obj);
  }

  eliminarPromociones(obj: any) {
    let url = this.urlback + "promociones/eliminar/" + obj;
    return this.http.delete(url);
  }

  obtenerPromocionesPorId(obj: any) {
    let url = this.urlback + "promociones/buscar";
    return this.http.post<any>(url, obj);
  }
}
