import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service'

@IonicPage()
@Component({
  selector: 'page-adicionar-eventos',
  templateUrl: 'adicionar-eventos.html',
})
export class AdicionarEventosPage {
  evento = {
    nome: '',
    descricao: '',
    dataEvento: '',
    categoria: '',
  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public dbService: FirebaseServiceProvider,
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdicionarEventosPage')
  }

  salvar(evento) {
    this.dbService.save(evento)
  }
}
