import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../../home/home'; 


@Component({
  selector: 'page-solborrar',
  templateUrl: 'solborrar.html'
})
export class SolBorrarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}
  
  tipoI :string ='TITU' ; 

  period :string = 'M';
 
  estadoS :string ='TR';

  codPro :string ='CREDVI';
 
  fecACtual : string;
  genero  = [];
  numsoldRamdon : number;

  ionViewDidLoad() {
    console.log('ionViewDidLoad BorrarSOLPage');
    this.numsoldRamdon = this.getRndInteger(1,99999);
  }

   gotoHome(){
  	console.log(`go home`);
  	this.navCtrl.setRoot(HomePage);
  }

    getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
 }

  todayDate(datetoDay :string) :void{
  let utc = new Date().toJSON().slice(0,10);
    if (datetoDay === undefined ){
    this.fecACtual = utc;
    }
  }

}
