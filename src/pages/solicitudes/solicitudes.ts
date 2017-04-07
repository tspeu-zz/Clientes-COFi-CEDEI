import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SolActualPage, SolAltaPage, SolBorrarPage, SolBuscarPage} from './index';
import {HomePage} from '../home/home'; 


@Component({
  selector: 'page-solicitudes',
  templateUrl: 'solicitudes.html'
})
export class SolicitudesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SolicitudesPage');
  }

  gotoALTA(){
   	this.navCtrl.push(SolAltaPage);
   }

   gotoBusca(){
   	this.navCtrl.push(SolBuscarPage);
   }

    gotoBaja(){
   	this.navCtrl.push(SolBorrarPage);
   }

    gotoActual(){
   	this.navCtrl.push(SolActualPage);
   }

   gotoHome(){
    console.log(`go home`);
    this.navCtrl.setRoot(HomePage);
  }

}
