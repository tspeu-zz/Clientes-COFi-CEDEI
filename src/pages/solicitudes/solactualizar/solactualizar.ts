import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../../home/home'; 


@Component({
  selector: 'page-solactualizar',
  templateUrl: 'solactualizar.html'
})
export class SolActualPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  fecACtual : string;
  genero  = [];
  numsoldRamdon : number;

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActuaSolicitudPage');
    this.numsoldRamdon = this.getRndInteger(1,99999);
  }

  public event = {
    month: '1990-02-19',
    
  }
  tipoI :string ='TITU' ; 

  period :string = 'M';
 
  estadoS :string ='TR';

  codPro :string ='CREDVI';


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
