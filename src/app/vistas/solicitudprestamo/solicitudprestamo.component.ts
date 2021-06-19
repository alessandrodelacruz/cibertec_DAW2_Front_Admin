import { Component, OnInit } from '@angular/core';
import { Solicitudprestamo } from '../../modelos/solicitudoprestamo';
import { SolicitudprestamoService } from '../../servicios/solicitudprestamo.service';

@Component({
  selector: 'app-solicitudprestamo',
  templateUrl: './solicitudprestamo.component.html',
  styleUrls: ['./solicitudprestamo.component.css']
})
export class SolicitudprestamoComponent implements OnInit {

  constructor(
    private solicitudprestamoService: SolicitudprestamoService,
  ) { }
  public visibletabla: Boolean = true;
  public lista: Solicitudprestamo[] = [];

  ngOnInit(): void {
  }
  
  listar(): void {
    this.solicitudprestamoService.listarSolicitudPrestamo().subscribe(resp => {
      this.lista = resp;
    })
  }
}
