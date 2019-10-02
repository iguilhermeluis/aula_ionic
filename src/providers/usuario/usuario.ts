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
}
