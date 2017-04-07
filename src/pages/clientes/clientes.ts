import { Component  } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AltaclientePage,BuscarclientePage,ActuaclientePage,BorrarclientePage} from './index';
import {HomePage} from '../home/home'; 


export interface PageInterface {
  title: string;
  component: any;
  icon: string; 
  index?: number; 
}



@Component({
  selector: 'page-clientes',
  templateUrl: 'clientes.html'
})
export class ClientesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientesPage');
  }

  pags ={AltaclientePage,BuscarclientePage,ActuaclientePage,BorrarclientePage};

  appPages: PageInterface[] = [
    { title: 'Alta', component: AltaclientePage, index: 0, icon: 'calendar' },
    { title: 'Buscar', component: BuscarclientePage,  index: 1, icon: 'contacts' },
    { title: 'Baja', component: ActuaclientePage, index: 2, icon: 'map' },
    { title: 'Borrar', component: BorrarclientePage,index: 3, icon: 'information-circle' }
  ];



  gotoBuscar(page: PageInterface){
  	console.log(`click aki`);
  	this.navCtrl.push(page.component);
  }

   gotoALTA(){
   	this.navCtrl.push(AltaclientePage);
   }

   gotoBusca(){
   	this.navCtrl.push(BuscarclientePage);
   }

    gotoBaja(){
   	this.navCtrl.push(BorrarclientePage);
   }

    gotoActual(){
   	this.navCtrl.push(ActuaclientePage);
   }

   gotoHome(){
    console.log(`go home`);
    this.navCtrl.setRoot(HomePage);
  }

}
