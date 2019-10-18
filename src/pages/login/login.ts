import { Component } from '@angular/core'
import { CadastroPage } from '../cadastro/cadastro'
import { HomePage } from '../home/home'
import { UsuarioProvider } from '../../providers/usuario/usuario'
import { Storage } from '@ionic/storage'

import {
  IonicPage,
  NavController,
  NavParams,
  MenuController,
  Events,
  ToastController,
} from 'ionic-angular'

import { AngularFireAuth } from 'angularfire2/auth'

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  email: string
  senha: string
  urlImage: string = 'assets/imgs/user.svg'
  isUsuarioValido: boolean = true
  nomeUsuario: string = ''
  dados: any
  user: any

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public usuarioProvider: UsuarioProvider,
    public storage: Storage,
    public menu: MenuController,
    public events: Events,
    public firebaseauth: AngularFireAuth,
    public toastCtrl: ToastController,
  ) {
    firebaseauth.user.subscribe((data) => {
      this.user = data
      console.info(data)
    })
  }

  ionViewDidLoad() {
    console.log('O ionViewDidLoad é executado quando carregar')

    this.menu.swipeEnable(false, 'menuMain')

    // verifico ao carregar, se o usuário está logado
    this.storage.get('logado').then((data) => {
      if (data) {
        console.log('Logado: ' + data)
        // Ativar o menu lateral
        this.menu.swipeEnable(true, 'menuMain')
        //se estiver logado, mova ele para pagina home
        this.navCtrl.setRoot(HomePage)
      } else {
        // Desativar o menu lateral
        this.menu.swipeEnable(false, 'menuMain')
      }
    })
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

        this.events.publish('attUser', data)
        // Gravando o retorno do Github no banco local
        this.storage.set('user', data)

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

        // Gravando a sessão
        this.storage.set('logado', true)
        // Ativar o menu lateral
        this.menu.swipeEnable(true, 'menuMain')
        this.navCtrl.setRoot(HomePage)
      } else {
        console.log('E-mail ou senha inválidos')
      }
      elementoBotao.innerText = 'ENTRAR'
      elementoBotao.style.background = corAntiga
    }, 3000)
  }

  LoginComFirebase() {
    let elementoBotao = <HTMLElement>document.querySelector('#btnLogin')
    elementoBotao.innerText = 'ENTRANDO...'
    let corAntiga = elementoBotao.style.background
    elementoBotao.style.background = '#7f8c8d'
    this.firebaseauth.auth
      .signInWithEmailAndPassword(this.email, this.senha)
      .then(() => {
        this.exibirToast('Logado com sucesso!')
        this.navCtrl.setRoot(HomePage)
      })
      .catch((erro: any) => {
        console.log(erro)
        elementoBotao.innerText = 'ENTRAR'
        elementoBotao.style.background = corAntiga
        this.exibirToast('Usuário ou senha inválidos')
      })
  }
  
  exibirToast(mensagem: string) {
    let toast = this.toastCtrl.create({
      duration: 3000,
      position: 'botton' })
    toast.setMessage(mensagem)
    toast.present()
  }

}
