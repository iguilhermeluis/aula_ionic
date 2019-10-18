import { BrowserModule } from '@angular/platform-browser'
import { ErrorHandler, NgModule } from '@angular/core'
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular'

import { MyApp } from './app.component'
import { HomePage } from '../pages/home/home'
import { ListPage } from '../pages/list/list'
import { AnaPage } from '../pages/ana/ana'
import { LoginPage } from '../pages/login/login'

import { StatusBar } from '@ionic-native/status-bar'
import { SplashScreen } from '@ionic-native/splash-screen'
import { CadastroPage } from '../pages/cadastro/cadastro'
import { UsuarioProvider } from '../providers/usuario/usuario'
import { HttpClientModule } from '@angular/common/http'
import { IonicStorageModule } from '@ionic/storage'

import { Camera } from '@ionic-native/camera'
import { Geolocation } from '@ionic-native/geolocation'
// import { BarcodeScanner } from '@ionic-native/barcode-scanner'
import { Vibration } from '@ionic-native/vibration'
import { Device } from '@ionic-native/device'
import { AngularFireModule } from 'angularfire2'
import { AngularFireAuthModule } from 'angularfire2/auth'

export const firebaseConfig = {
  apiKey: 'AIzaSyAei4rSeM-Nsb4dzDMEiTlT7r0V1UBaR20',
  authDomain: 'senacionic.firebaseapp.com',
  databaseURL: 'https://senacionic.firebaseio.com',
  storageBucket: 'senacionic.appspot.com',
  messagingSenderId: '277987106305',
}

@NgModule({
  declarations: [MyApp, HomePage, ListPage, AnaPage, LoginPage, CadastroPage],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: '__dbsenac',
      driverOrder: ['indexeddb', 'websql', 'sqlite'],
    }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AnaPage,
    LoginPage,
    CadastroPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    UsuarioProvider,
    Camera,
    Geolocation,
    // BarcodeScanner,
    Vibration,
    Device,
  ],
})
export class AppModule {}
