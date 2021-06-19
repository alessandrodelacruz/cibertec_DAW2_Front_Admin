import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Promociones } from 'src/app/modelos/promociones';
import { PromocionesService } from '../../servicios/promociones.service';

@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.component.html',
  styleUrls: ['./promociones.component.css']
})
export class PromocionesComponent implements OnInit {

  lista: Promociones[] = [];


  public promociones: Promociones = new Promociones();
  form: FormGroup = new FormGroup({});
  public IU: any;
  public boton_primario: any;
  public visibletabla: Boolean = true;
  public visibleform: Boolean = false;
  _sidebar = [{"menu": 2}]

  constructor(
    private promocionesService: PromocionesService) { }

  ngOnInit(): void {
    this.listar();
    this.iniciarModal();
  }

  listar(): void {
    this.promocionesService.listarPromociones().subscribe(resp => {
      this.lista = resp;      
    })
  }

  eliminar(objeto: Promociones): void {
    let obj = new Promociones();
    obj.id = objeto.id;
    
    this.promocionesService.eliminarPromociones(obj.id).subscribe(resp => {
      this.listar();
    })
  }







  openModal(obj: any, acc: number) {
    this.visibleform = true
    this.visibletabla = false
    if (acc == 1) {
      this.promociones = new Promociones();
    } else {
      this.promociones = new Promociones();
      this.promociones = obj;
    }
    this.iniciarModal();
  }

  iniciarModal() {
    if (this.promociones.id != null) {
      this.IU = "ACTUALIZAR";
      this.boton_primario = "Actualizar";
      this.form = new FormGroup({
        'id': new FormControl(this.promociones.id),
        'nombre': new FormControl(this.promociones.nombre),
      });
    } else {
      this.IU = "NUEVO";
      this.boton_primario = "Registrar";
      this.form = new FormGroup({
        'id': new FormControl(0),
        'nombre': new FormControl(''),
      });
    }
  }

  operar(): void {
    let obj = new Promociones();
    obj.id = this.promociones.id;
    obj.nombre = this.form.value['nombre'];
    
    if (obj.id == undefined) {
      this.promocionesService.registrarPromociones(obj).subscribe(resp => {
        this.listar();
        this.visibleform = false ;
        this.visibletabla = true ;
      })
    } else {
      this.promocionesService.actualizarPromociones(obj).subscribe(resp => {
        this.listar();
        this.visibleform = false ;
        this.visibletabla = true ;
      })
    }
  }

  cancelar() {
    this.visibleform = false ;
    this.visibletabla = true ;
  }

}

