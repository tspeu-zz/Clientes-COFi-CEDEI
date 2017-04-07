import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ClientesPage} from '../pages/clientes/clientes';
import { SolicitudesPage} from '../pages/solicitudes/solicitudes';
import {AltaclientePage,BuscarclientePage,ActuaclientePage,BorrarclientePage} from '../pages/clientes/index';
import { SolActualPage, SolAltaPage, SolBorrarPage, SolBuscarPage} from '../pages/solicitudes/index';
//  solactualizar/solactualizar
import {PrestamosPage} from '../pages/prestamos/prestamos';
import {LoginPage} from '../pages/login/login';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,HomePage,
    ClientesPage, SolicitudesPage,PrestamosPage,
    AltaclientePage,BuscarclientePage,ActuaclientePage,BorrarclientePage 
    ,SolActualPage, SolAltaPage, SolBorrarPage, SolBuscarPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,HomePage,
    ClientesPage,SolicitudesPage,PrestamosPage,
    AltaclientePage,BuscarclientePage,ActuaclientePage,BorrarclientePage
    ,SolActualPage , SolAltaPage, SolBorrarPage, SolBuscarPage
   
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
