import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  urlback;

  constructor(
    private http: HttpClient) {
    this.urlback = environment.URL_BACKBANCO;
  }

  listarTransferenciaPorCliente(obj: any) {
    let url = this.urlback + "transferencia/listarPorCliente";
    // return this.http.get<any[]>(url, obj);
    return this.http.post<any>(url, obj);
  }

  listarTransferenciaPorCuentaBancaria(obj: any) {
    let url = this.urlback + "transferencia/listarPorCuentaBancaria";
    // return this.http.get<any[]>(url, obj);
    return this.http.post<any>(url, obj);
  }

  registrarTransferencia(obj: any) {
    let url = this.urlback + "transferencia/registrar";
    return this.http.post<any>(url, obj);
  }
}
