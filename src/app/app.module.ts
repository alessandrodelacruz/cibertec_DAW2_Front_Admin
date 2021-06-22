import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TipodecambioComponent } from './vistas/tipodecambio/tipodecambio.component';
import { LaboratorioComponent } from './vistas/laboratorio/laboratorio.component';
import { CuentausuarioComponent } from './vistas/cuentausuario/cuentausuario.component';
import { PromocionesComponent } from './vistas/promociones/promociones.component';
import { PrestameclienteComponent } from './vistas/prestamecliente/prestamecliente.component';
import { ModalTipodecambioComponent } from './vistas/tipodecambio/modal-tipodecambio/modal-tipodecambio.component';
import { SidebarComponent } from './componentes/sidebar/sidebar.component';
import { HeaderComponent } from './componentes/header/header.component';
import { PaginaComponent } from './componentes/pagina/pagina.component';
import { SolicitudprestamoComponent } from './vistas/solicitudprestamo/solicitudprestamo.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { TransferenciaOtrascuentaComponent } from './vistas/cliente/transferencia-otrascuenta/transferencia-otrascuenta.component';
import { ModalPrevisualizacionComponent } from './vistas/cliente/transferencia-otrascuenta/modal-previsualizacion/modal-previsualizacion.component';
import { CuentaDigitalInicioComponent } from './vistas/cliente/cuenta-digital-inicio/cuenta-digital-inicio.component';
import { TipotransferenciaComponent } from './tipotransferencia/tipotransferencia.component';
import { ModalComponent } from './tipotransferencia/modal/modal.component';
import { AbrirCuentaDigitalComponent } from './vistas/cliente/abrir-cuenta-digital/abrir-cuenta-digital.component';
import { ModalCuentausuarioComponent } from './vistas/cuentausuario/modal-cuentausuario/modal-cuentausuario.component';
import { ModalCuentadigitalComponent } from './vistas/cliente/abrir-cuenta-digital/modal-cuentadigital/modal-cuentadigital.component';
import { LoginComponent } from './vistas/cliente/login/login.component';
import { InicioComponent } from './vistas/inicio/inicio.component';
import { ModalPrestamoComponent } from './vistas/prestamecliente/modal-prestamo/modal-prestamo.component';



@NgModule({
  declarations: [
    AppComponent,
    LaboratorioComponent,
    TipodecambioComponent,
    CuentausuarioComponent,
    PromocionesComponent,
    PrestameclienteComponent,
    ModalTipodecambioComponent,
    SidebarComponent,
    HeaderComponent,
    PaginaComponent,
    SolicitudprestamoComponent,
    DashboardComponent,
    TransferenciaOtrascuentaComponent,
    ModalPrevisualizacionComponent,
    CuentaDigitalInicioComponent,
    TipotransferenciaComponent,
    ModalComponent,
    AbrirCuentaDigitalComponent,
    ModalCuentausuarioComponent,
    ModalCuentadigitalComponent,
    LoginComponent,
    InicioComponent,
    ModalPrestamoComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,    
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  providers: [
    NgbActiveModal
  ],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }



