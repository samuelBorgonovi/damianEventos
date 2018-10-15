import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BuscarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buscar',
  templateUrl: 'buscar.html',
})
export class BuscarPage {

  searchQuery: string = '';
  items: string[];

  constructor() {
    this.initializeItems();
  }

  initializeItems() {
    this.items = [
      'Paciente 1',
      'Paciente 2',
    ];
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad BuscarPage');
  }


}

