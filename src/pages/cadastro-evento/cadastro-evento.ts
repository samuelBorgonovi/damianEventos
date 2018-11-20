import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CadastroEventoDao } from '../../dao/cadastroEvento-dao';
import { FileChooser } from '@ionic-native/file-chooser';
import { FilePath } from '@ionic-native/file-path';
import { Base64 } from '@ionic-native/base64';

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
    valor: "",
    foto: ""
  }

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private cadastroEventoDao: CadastroEventoDao,
    private fileChooser: FileChooser,
    private filePath: FilePath,
    private base64: Base64) {

  }

  salvar() {
    this.cadastroEventoDao.create(new Date().toISOString(), this.cadastroEvento).then(
      () => {
        this.cadastroEvento = {
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

  chooseFile() {
    this.fileChooser.open().then((uri: string) => {
      this.getFile(uri);
    }).catch(err => {
      alert(err)
    });
  }

  getFile(uri: string) {
    this.filePath.resolveNativePath(uri).then((filePath: string) => {
      this.fileTo64(filePath)
    }).catch(err => {
      alert(err)
    });
  }

  fileTo64(file: string) {
    const fileName: string = file.substring(file.lastIndexOf("/") + 1);
    const type: string = fileName.split(".")[1];
    if (type != 'jpg' && type != 'png') {
      return;
    }
    this.base64.encodeFile(file).then((base64File: string) => {
      this.cadastroEvento.foto = {
        nome: fileName,
        tipo: `image/${type}`,
        arquivo: base64File
      }
    }, (err) => {
      alert(err);
    });
  }

}
