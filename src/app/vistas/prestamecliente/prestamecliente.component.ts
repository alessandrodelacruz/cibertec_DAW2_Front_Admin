import { Component, OnInit } from '@angular/core';
import { PrestamoService } from '../../servicios/prestamo.service';
import { Prestamocliente } from '../../modelos/prestamocliente';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-prestamecliente',
  templateUrl: './prestamecliente.component.html',
  styleUrls: ['./prestamecliente.component.css']
})
export class PrestameclienteComponent implements OnInit {

  lista: Prestamocliente[] = [];

  public prestamocliente: Prestamocliente = new Prestamocliente();
  form: FormGroup = new FormGroup({});
  public IU: any;
  public boton_primario: any;

  constructor(
    private prestamoClienteService: PrestamoService) { }

  ngOnInit(): void {
    this.listar();

    
    this.iniciarModal();
  }

  listar(): void {
    this.prestamoClienteService.listarPrestamoCliente().subscribe(resp => {
      this.lista = resp;
    })
  }
  
  eliminar(objeto: any): void {
    let obj = new Prestamocliente();
    obj.id = objeto.id;
    
    this.prestamoClienteService.eliminarPrestamoCliente(obj.id).subscribe(resp => {
      this.listar();
    })
  }




  
  openModal(obj: any, acc: number) {
    if (acc == 1) {
      this.prestamocliente = new Prestamocliente();
    } else {
      this.prestamocliente = new Prestamocliente();
      this.prestamocliente = obj;
    }
    this.iniciarModal();
  }

  iniciarModal() {
    if (this.prestamocliente.id != null) {
      this.IU = "ACTUALIZAR";
      this.boton_primario = "Actualizar";
      this.form = new FormGroup({
        'id': new FormControl(this.prestamocliente.id),
        'descripcion': new FormControl(this.prestamocliente.descripcion),
        'plazo': new FormControl(this.prestamocliente.plazo),
        'inicio': new FormControl(this.prestamocliente.inicio),
        'fin': new FormControl(this.prestamocliente.fin),
        'solicitud': new FormControl(this.prestamocliente.solicitud),
      });
    } else {
      this.IU = "NUEVO";
      this.boton_primario = "Registrar";
      this.form = new FormGroup({
        'id': new FormControl(0),
        'descripcion': new FormControl(''),
        'plazo': new FormControl(''),
        'inicio': new FormControl(''),
        'fin': new FormControl(''),
        'solicitud': new FormControl(''),
      });
    }
  }

  operar(): void {
    let obj = new Prestamocliente();
    obj.id = this.prestamocliente.id;
    obj.descripcion = this.form.value['descripcion'];
    obj.plazo = this.form.value['plazo'];
    obj.inicio = this.form.value['inicio'];
    obj.fin = this.form.value['fin'];
    obj.solicitud = this.form.value['solicitud'];
    if (obj.id == undefined) {
      this.prestamoClienteService.registrarPrestamoCliente(obj).subscribe(resp => {
        this.listar();
      })
    } else {
      this.prestamoClienteService.actualizarPrestamoCliente(obj).subscribe(resp => {
        this.listar();
      })
    }
  }

  cancelar() {
    // this.dialogRef.close();
  }

}
