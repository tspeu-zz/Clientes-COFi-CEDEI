import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GooglePlus } from 'ionic-native';
import { HomePage} from '../home/home';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
 
    constructor(public navCtrl: NavController, public navParams: NavParams) {
 
    }
 
    login(){
 
        GooglePlus.login({
          'webClientId': '32164060737-rcnt26n1lj7rfh8sm7or61vpqbuatvdn.apps.googleusercontent.com'
        }).then((res) => {
            console.log(res);
        }, (err) => {
            console.log(err);
        });
 
    }
 
    logout(){
 
        GooglePlus.logout().then(() => {
            console.log("logged out");
        });
 
    }

    gotoHome(){
        this.navCtrl.setRoot(HomePage);
    }
}