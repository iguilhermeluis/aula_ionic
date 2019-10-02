import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'
import { CadastroPage } from '../cadastro/cadastro'
import { HomePage } from '../home/home'

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  email: String
  senha: String
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage')
  }
  abrirCadastro() {
    this.navCtrl.push(CadastroPage)
  }

  fazerLogin() {
    let elementoBotao = <HTMLElement>document.querySelector('#btnLogin')
    elementoBotao.innerText = 'ENTRANDO...'
    let corAntiga = elementoBotao.style.background
    elementoBotao.style.background = '#7f8c8d'

    setTimeout(() => {
      if (this.email == 'admin' && this.senha == 'admin') {
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
