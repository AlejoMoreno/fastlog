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
import { UsuariosComponent } from './usuarios/usuarios.component';
import { CasacomercialesComponent } from './casacomerciales/casacomerciales.component';
import { ClinicaComponent } from './clinica/clinica.component';

const APP_ROUTES: Routes = [    
    { path: 'login', component: LoginComponent },
    { path: 'index', component: IndexComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'registroGps', component: RegistrogpsComponent },
    { path: 'cargarProducto', component: CargarproductoComponent },
    { path: 'registroUsuario', component: UsuariosComponent },
    { path: 'registroCasaComercial', component: CasacomercialesComponent },
    { path: 'registroClinica', component: ClinicaComponent },
    { path: 'salir', component: LoginComponent },
    { path: '**', component: IndexComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }