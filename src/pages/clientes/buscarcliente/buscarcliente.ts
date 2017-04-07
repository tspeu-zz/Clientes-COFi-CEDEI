import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../../home/home'; 


@Component({
  selector: 'page-buscarcliente',
  templateUrl: 'buscarcliente.html'
})
export class BuscarclientePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  busca: string = "dni";


  ionViewDidLoad() {
    console.log('ionViewDidLoad BuscarclientePage');
  }

   gotoHome(){
  	console.log(`go home`);
  	this.navCtrl.setRoot(HomePage);
  }

}
