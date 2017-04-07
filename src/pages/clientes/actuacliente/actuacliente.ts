import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../../home/home'; 


@Component({
  selector: 'page-actuacliente',
  templateUrl: 'actuacliente.html'
})
export class ActuaclientePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  fecACtual : string;


  ionViewDidLoad() {
    console.log('ionViewDidLoad ActuaclientePage');
  }

  public event = {
    month: '1990-02-19',
    
  }

  genero :string = 'Mujer';
  tipoD :string = 'DNI';

  todayDate(datetoDay :string) :void{
	let utc = new Date().toJSON().slice(0,10);
		if (datetoDay === undefined ){
	this.fecACtual = utc;
	}
  }


  gotoHome(){
  	console.log(`go home`);
  	this.navCtrl.setRoot(HomePage);
  }
}
