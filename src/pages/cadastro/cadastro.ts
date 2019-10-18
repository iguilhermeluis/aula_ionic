import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'

import { LoginPage } from '../login/login'
import { HomePage } from '../home/home'
import { UsuarioProvider } from '../../providers/usuario/usuario'
import { AngularFireAuth } from 'angularfire2/auth'

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {
  email: string
  senha: string
  nome: String
  dtNascimento: Date

  cep: String
  bairro: String
  rua: String
  estado: String

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public usuarioProvider: UsuarioProvider,
    public firebaseauth: AngularFireAuth,
  ) {}

  cadastrar() {
    this.firebaseauth.auth
      .createUserWithEmailAndPassword(this.email, this.senha)
      .then(() => {
        this.navCtrl.setRoot(HomePage)
      })
      .catch((erro: any) => {
        console.error(erro)
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage')
  }

  buscarCep() {
    this.usuarioProvider.buscarEnderecoViaCep(this.cep).then((data: any) => {
      this.bairro = data.bairro
      this.rua = data.logradouro
      this.estado = data.localidade
      this.cep = data.cep
      console.log(data)
    })
  }
  jaPossuoConta() {
    this.navCtrl.push(LoginPage)
  }
}
