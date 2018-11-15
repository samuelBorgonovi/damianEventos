import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CadastroEventoDao } from '../../dao/cadastroEvento-dao';

@IonicPage()
@Component({
  selector: 'page-cadastro-evento',
  templateUrl: 'cadastro-evento.html',
})

export class CadastroEventoPage {
  cadastroEvento: any = {
    titulo: "",
    data: "",
    descricao: "",
    valor: ""
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private cadastroEventoDao: CadastroEventoDao) {

  }

  salvar() {
    this.cadastroEventoDao.create(new Date().toISOString(), this.cadastroEvento).then(
      () => {
        this.cadastroEvento  = {
          titulo: "",
          data: "",
          descricao: "",
          valor: ""
        }
      }
    ).catch(err => {
      console.error(err)
    })
  }

}
