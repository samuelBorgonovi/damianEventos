import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HistóricoPage } from './histórico';

@NgModule({
  declarations: [
    HistóricoPage,
  ],
  imports: [
    IonicPageModule.forChild(HistóricoPage),
  ],
})
export class HistóricoPageModule {}
