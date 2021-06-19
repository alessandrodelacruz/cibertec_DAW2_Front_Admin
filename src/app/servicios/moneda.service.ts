import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class MonedaService {

  urlback;

  constructor(
    private http: HttpClient
  ) {
    this.urlback = environment.URL_BACKBANCO;
  }

  listarMonedas() {
    let url = this.urlback + "moneda/lista";
    return this.http.get<any[]>(url);
  }

}
