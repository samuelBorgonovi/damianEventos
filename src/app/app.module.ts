import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AnexosPage } from '../pages/anexos/anexos';
import { BuscarPage } from '../pages/buscar/buscar';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MeusEventosPage } from '../pages/meus-eventos/meus-eventos';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MeusEventosPage,
    AnexosPage,
    LoginPage,
    BuscarPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MeusEventosPage,
    AnexosPage,
    LoginPage,
    BuscarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
