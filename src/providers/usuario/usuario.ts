import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable()
export class UsuarioProvider {
  constructor(public http: HttpClient) {
    console.log('Hello UsuarioProvider Provider')
  }
  buscarEnderecoViaCep(cep) {
    return new Promise((resolve) => {
      this.http.get(`https://viacep.com.br/ws/${cep}/json/`).subscribe(
        (data) => {
          resolve(data)
        },
        (err) => {
          console.error(err)
        },
      )
    })
  }
  buscarUserGithub(user) {
    return new Promise((resolve) => {
      this.http.get(`https://api.github.com/users/${user}`).subscribe(
        (data) => {
          resolve(data)
        },
        (err) => {
          resolve('error')
          console.error(err)
        },
      )
    })
  }

  localizarIp() {
    return new Promise((resolve) => {
      this.http.get(`https://freegeoip.app/json/`).subscribe(
        (data) => {
          resolve(data)
        },
        (err) => {
          resolve('error')
          console.error(err)
        },
      )
    })
  }
  buscarMusica(musica) {
    return new Promise((resolve) => {
      this.http
        .get(`https://itunes.apple.com/search?term=${musica}&limit=25`)
        .subscribe(
          (data) => {
            resolve(data)
          },
          (err) => {
            resolve('error')
            console.error(err)
          },
        )
    })
  }
}
