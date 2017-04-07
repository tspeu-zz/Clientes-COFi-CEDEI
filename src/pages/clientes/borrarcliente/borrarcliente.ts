import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../../home/home'; 


@Component({
  selector: 'page-borrarcliente',
  templateUrl: 'borrarcliente.html'
})
export class BorrarclientePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BorrarclientePage');
  }

   gotoHome(){
  	console.log(`go home`);
  	this.navCtrl.setRoot(HomePage);
  }

}
