import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../../home/home'; 


@Component({
  selector: 'page-solbuscar',
  templateUrl: 'solbuscar.html'
})
export class SolBuscarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  busca: string = "dni";


  ionViewDidLoad() {
    console.log('ionViewDidLoad BuscarSolPage');
  }

   gotoHome(){
  	console.log(`go home`);
  	this.navCtrl.setRoot(HomePage);
  }

}
