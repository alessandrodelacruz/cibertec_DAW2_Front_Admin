import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Transferencia } from 'src/app/modelos/transferencia';
import { CuentabancariaService } from 'src/app/servicios/cuentabancaria.service';
import { TransferenciaService } from '../../../../servicios/transferencia.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-modal-previsualizacion',
  templateUrl: './modal-previsualizacion.component.html',
  styleUrls: ['./modal-previsualizacion.component.css']
})
export class ModalPrevisualizacionComponent implements OnInit {
  
  @Input() obj;
  
  public objTransferencia: Transferencia = new Transferencia();
  constructor(
    public activeModal: NgbActiveModal,
    private transferenciaService: TransferenciaService) { }

  ngOnInit(): void {
    this.objTransferencia = this.obj;
    console.log("objTransferencia", this.objTransferencia)
  }

  guardarTransaccion(){
    this.objTransferencia.id = null;
    this.transferenciaService.registrarTransferencia(this.objTransferencia).subscribe(resp => {
      swal('Transaccion correcta', 'Se inserto correctamente el tipo de cambio', 'success');
      this.activeModal.close({ 'accion': 1 });
    })
  }
  
  cancelar() {
    this.activeModal.close({ 'accion': 0 });
  }

}
