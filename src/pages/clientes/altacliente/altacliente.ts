import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../../home/home'; 


@Component({
  selector: 'page-altacliente',
  templateUrl: 'altacliente.html'
})
export class AltaclientePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  fecACtual : string;
  codClieR :number ;
  ionViewDidLoad() {
    console.log('ionViewDidLoad AltaclientePage');
    this.todayDate(this.fecACtual);
    this.codClieR = this.getRndInteger(1,10000000);
  }

  public event = {
    month: '1990-02-19'
    
  }

datosP  = {
  genero :  'Mujer',
  tipoD :  'DNI',
  NumD :  '123456789A',
  nacimiento : '1919-02-19',
  nombre :  'Amparo',
  apellido :  'Perez',
  apellido2 :  'Guitierrez',
  codPostal : '38001',
  tlfn :  '922100212',
  ccc : '12345678912345678987'
 }

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

   getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
 }

}
