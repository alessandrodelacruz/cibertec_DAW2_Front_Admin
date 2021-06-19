import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CuentabancariaService {

  urlback;

  constructor(
    private http: HttpClient) {
    this.urlback = environment.URL_BACKBANCO;
  }

  listarCuentaBancariaPorCliente(obj: any) {
    let url = this.urlback + "cuentaBancaria/listarPorCliente";
    // return this.http.get<any[]>(url, obj);
    return this.http.post<any>(url, obj);
  }

  retornaCuentaBancariaPorNumdeCuenta(obj: any) {
    let url = this.urlback + "cuentaBancaria/retornaPorNumdeCuenta";
    // return this.http.get<any[]>(url, obj);
    return this.http.post<any>(url, obj);
  }


}
