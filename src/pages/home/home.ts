import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { BuscarPage } from '../buscar/buscar';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  logIn() {
    let profileModal = this.modalCtrl.create(LoginPage);
    profileModal.present();

    profileModal.onDidDismiss(data => {  
      console.log(data);
    });
 }
  Buscar(){
    let profileModal = this.modalCtrl.create(BuscarPage);
    profileModal.present();

    profileModal.onDidDismiss(data => {  
      console.log(data);
    });
  }
  }
