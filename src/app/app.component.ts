import { Component, ViewChild } from '@angular/core'
import { Nav, Platform, Events } from 'ionic-angular'
import { StatusBar } from '@ionic-native/status-bar'
import { SplashScreen } from '@ionic-native/splash-screen'

import { HomePage } from '../pages/home/home'
import { ListPage } from '../pages/list/list'
import { LoginPage } from '../pages/login/login'
import { Storage } from '@ionic/storage'

@Component({
  templateUrl: 'app.html',
})
export class MyApp {
  @ViewChild(Nav) nav: Nav

  rootPage: any = LoginPage
  pages: Array<{ title: string; component: any }>
  urlImage: String = 'assets/imgs/no_user.png'
  dadosUser: any

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public storage: Storage,
    public events: Events,
  ) {
    this.initializeApp()

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Login', component: LoginPage },
    ]
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.overlaysWebView(false)
      this.statusBar.backgroundColorByHexString('#0072ff')
    })

    this.events.subscribe('attUser', (data) => {
      this.dadosUser = data
      this.urlImage = data.avatar_url
    })

    // verifica se tem dados do usuario para carregar para memoria
    this.storage.get('user').then((data) => {
      if (data) {
        this.events.publish('attUser', data)
      }
    })
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component)
  }

  sair() {
    this.nav.setRoot(LoginPage)
    this.storage.clear()
  }
}
