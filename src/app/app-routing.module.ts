import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaboratorioComponent } from './vistas/laboratorio/laboratorio.component';
import { TipodecambioComponent } from './vistas/tipodecambio/tipodecambio.component';
import { CuentausuarioComponent } from './vistas/cuentausuario/cuentausuario.component';
import { PromocionesComponent } from './vistas/promociones/promociones.component';
import { PrestameclienteComponent } from './vistas/prestamecliente/prestamecliente.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { SolicitudprestamoComponent } from './vistas/solicitudprestamo/solicitudprestamo.component';
import { TransferenciaOtrascuentaComponent } from './vistas/cliente/transferencia-otrascuenta/transferencia-otrascuenta.component';
import { TipotransferenciaComponent } from './tipotransferencia/tipotransferencia.component';
import { AbrirCuentaDigitalComponent } from './vistas/cliente/abrir-cuenta-digital/abrir-cuenta-digital.component';
import { CuentaDigitalInicioComponent } from './vistas/cliente/cuenta-digital-inicio/cuenta-digital-inicio.component';
import { LoginComponent } from './vistas/cliente/login/login.component';

const routes: Routes = [
  {path:'',redirectTo:'laboratorio',pathMatch:'full'},
  {path:'laboratorio',component:LaboratorioComponent},
  {path:'tipodecambio',component:TipodecambioComponent},
  {path:'cuentausuario',component:CuentausuarioComponent},
  {path:'promociones',component:PromocionesComponent},
  {path:'prestamecliente',component:PrestameclienteComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'solicitudprestamo',component:SolicitudprestamoComponent},
  {path:'transferenciaOtrascuenta',component:TransferenciaOtrascuentaComponent},
  {path:'tipodetransferencia',component:TipotransferenciaComponent},	
  {path:'abrirCuentaDigitalComponent',component:AbrirCuentaDigitalComponent},
  {path:'cuentaDigitalInicioComponent',component:CuentaDigitalInicioComponent},
  {path:'login',component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
