import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 

import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';

import { LoginServiceService } from './services/login-service.service';
import { GpsService } from './services/gps.service';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IndexComponent } from './index/index.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RegistrogpsComponent } from './registrogps/registrogps.component';
import { RemisionesasignadasComponent } from './remisionesasignadas/remisionesasignadas.component';
import { SeguimientorutaComponent } from './seguimientoruta/seguimientoruta.component';
import { AsignacionrutaComponent } from './asignacionruta/asignacionruta.component';
import { CargarproductoComponent } from './cargarproducto/cargarproducto.component';
import { GenerarremisionComponent } from './generarremision/generarremision.component';
import { ReporteconsultorComponent } from './reporteconsultor/reporteconsultor.component';
import { ReportetransportadorComponent } from './reportetransportador/reportetransportador.component';
import { ReporteruteadorComponent } from './reporteruteador/reporteruteador.component';
import { ReportebodegueroComponent } from './reportebodeguero/reportebodeguero.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    IndexComponent,
    FooterComponent,
    SidebarComponent,
    RegistrogpsComponent,
    RemisionesasignadasComponent,
    SeguimientorutaComponent,
    AsignacionrutaComponent,
    CargarproductoComponent,
    GenerarremisionComponent,
    ReporteconsultorComponent,
    ReportetransportadorComponent,
    ReporteruteadorComponent,
    ReportebodegueroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyClFwD-Pj_AYduEsEi0wThkz_Lhpn5D1fU'
    })
  ],
  providers: [ 
    LoginServiceService,
    GpsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
