import { Component } from '@angular/core'
import { NavController } from 'ionic-angular'
import { StatusBar } from '@ionic-native/status-bar'
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service'
import { timestamp } from 'rxjs/operator/timestamp'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  eventos: any

  constructor(
    public navCtrl: NavController,
    public statusBar: StatusBar,
    public dbService: FirebaseServiceProvider,
  ) {
    this.statusBar.backgroundColorByHexString('#000000')
    this.eventos = this.dbService.listarTodos()
  }
}
