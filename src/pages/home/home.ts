import { Component } from '@angular/core';

import { NavController, Nav } from 'ionic-angular';
import { ClientesPage } from '../clientes/clientes';
import { SolicitudesPage } from '../solicitudes/solicitudes';
import { PrestamosPage} from '../prestamos/prestamos';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 //@ViewChild(Nav) nav: Nav;

  constructor(public navCtrl: NavController) {
    
  }

  gotoClientes(){
  	console.log('pagina Clientes');
  	this.navCtrl.push(ClientesPage);
  	//this.nav.setRoot(ClientesPage);

  }

 gotoSoli(){
 	console.log('pagina olicitudes');
 	this.navCtrl.push(SolicitudesPage);
 }

 gotoPrestamos(){
 	console.log('pagina Prestamos');
 	this.navCtrl.push(PrestamosPage);
 }
}
