import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LaboratorioI } from 'src/app/modelos/laboratotio';
import { ApiService } from 'src/app/servicios/api.service';

@Component({
  selector: 'app-laboratorio',
  templateUrl: './laboratorio.component.html',
  styleUrls: ['./laboratorio.component.css']
})
export class LaboratorioComponent implements OnInit {

  laboratorios: LaboratorioI[]=[];
  //crear formulario para laboratorio
  laboratorioForm: FormGroup=new FormGroup({});



  constructor(private api:ApiService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.api.getAllLaboratorios().subscribe(data=>{
      this.laboratorios=data;
    })
    this.crearFormulario();
  }
  crearFormulario():void{
      //campos al formulario "laboratorioForm"
      this.laboratorioForm=this.fb.group({
          codigo:'',
          descripcion:''
      })
  }
  guardar():void{
      this.api.saveLaboratorio(this.laboratorioForm.value).subscribe(resp=>{

      })
  }


}
