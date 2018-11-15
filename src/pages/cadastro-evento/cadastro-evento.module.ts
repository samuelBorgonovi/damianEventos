import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroEventoPage } from './cadastro-evento';

@NgModule({
  declarations: [
    CadastroEventoPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroEventoPage),
  ],
})
export class CadastroEventoPageModule {}
