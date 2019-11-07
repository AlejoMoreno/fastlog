import { Routes, RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AsignacionrutaComponent } from './asignacionruta/asignacionruta.component';
import { CargarproductoComponent } from './cargarproducto/cargarproducto.component';
import { GenerarremisionComponent } from './generarremision/generarremision.component';
import { RegistrogpsComponent } from './registrogps/registrogps.component';
import { RemisionesasignadasComponent } from './remisionesasignadas/remisionesasignadas.component';
import { ReportebodegueroComponent } from './reportebodeguero/reportebodeguero.component';
import { ReporteconsultorComponent } from './reporteconsultor/reporteconsultor.component';
import { ReporteruteadorComponent } from './reporteruteador/reporteruteador.component';
import { ReportetransportadorComponent } from './reportetransportador/reportetransportador.component';
import { SeguimientorutaComponent } from './seguimientoruta/seguimientoruta.component';

const APP_ROUTES: Routes = [    
    { path: 'login', component: LoginComponent },
    { path: 'index', component: IndexComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'asignacionRuta', component: AsignacionrutaComponent },
    { path: 'cargarProducto', component: CargarproductoComponent },
    { path: 'generarRemision', component: GenerarremisionComponent },
    { path: 'registroGps', component: RegistrogpsComponent },
    { path: 'remisionesAsignadas', component: RemisionesasignadasComponent },
    { path: 'reporteBodeguero', component: ReportebodegueroComponent },
    { path: 'reporteConsultor', component: ReporteconsultorComponent },
    { path: 'reporteRuteador', component: ReporteruteadorComponent },
    { path: 'ReporteTransportador', component: ReportetransportadorComponent },
    { path: 'seguimientoRuta', component: SeguimientorutaComponent },
    { path: 'salir', component: LoginComponent },
    { path: '**', component: IndexComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }