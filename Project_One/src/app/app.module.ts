import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';

import { MyApp } from './app.component';
import { FrontPage } from '../pages/front/front';
import { NovaviagemPage } from '../pages/novaviagem/novaviagem';
import { NovamalaPage } from '../pages/novamala/novamala';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NovaViagemProvider, Viagem } from '../providers/globaldataprovider/globaldataprovider';
import { ToastController } from 'ionic-angular';

@NgModule({
  declarations: [
    MyApp,
    FrontPage,
    NovaviagemPage,
    NovamalaPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FrontPage,
    NovaviagemPage,
    NovamalaPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NativeStorage,
    NovaViagemProvider,
    ToastController,
    
  ]
})
export class AppModule {}
