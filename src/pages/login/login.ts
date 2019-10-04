import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'
import { CadastroPage } from '../cadastro/cadastro'
import { HomePage } from '../home/home'
import { UsuarioProvider } from '../../providers/usuario/usuario'

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  email: String
  senha: String
  urlImage: String = 'assets/imgs/user.svg'
  isUsuarioValido: boolean = false
  nomeUsuario: String = ''

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public usuarioProvider: UsuarioProvider,
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage')
  }
  abrirCadastro() {
    this.navCtrl.push(CadastroPage)
  }

  buscarUserGithub() {
    this.usuarioProvider.buscarUserGithub(this.email).then((data: any) => {
      if (data.avatar_url) {
        // se o usuario existir faça isso
        this.urlImage = data.avatar_url
        this.nomeUsuario = data.name
        this.isUsuarioValido = true
        console.log(data)
      } else {
        this.isUsuarioValido = false
        this.urlImage = 'assets/imgs/user.svg'
      }
    })
  }

  fazerLogin() {
    let elementoBotao = <HTMLElement>document.querySelector('#btnLogin')
    elementoBotao.innerText = 'ENTRANDO...'
    let corAntiga = elementoBotao.style.background
    elementoBotao.style.background = '#7f8c8d'

    setTimeout(() => {
      if (this.senha == 'admin') {
        console.log('Logado!')
        this.navCtrl.setRoot(HomePage)
      } else {
        console.log('E-mail ou senha inválidos')
      }
      elementoBotao.innerText = 'ENTRAR'
      elementoBotao.style.background = corAntiga
    }, 3000)
  }
}
