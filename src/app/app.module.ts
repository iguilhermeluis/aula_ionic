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

@NgModule({
  declarations: [MyApp, HomePage, ListPage, AnaPage, LoginPage, CadastroPage],
  imports: [BrowserModule, HttpClientModule, IonicModule.forRoot(MyApp)],
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
  ],
})
export class AppModule {}
