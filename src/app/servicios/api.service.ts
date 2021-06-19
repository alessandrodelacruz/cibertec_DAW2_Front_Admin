import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LaboratorioI } from '../modelos/laboratotio';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string="http://localhost:8091/laboratorio/";


  constructor(private http:HttpClient) { }


  getAllLaboratorios():Observable<LaboratorioI[]>{
    let direccion=this.url+"lista";
    return this.http.get<LaboratorioI[]>(direccion);
  }
  
  saveLaboratorio(laboratorio:LaboratorioI):Observable<any>{
    let direccion=this.url+"registra";
    return this.http.post<any>(direccion,laboratorio);

  }

}
