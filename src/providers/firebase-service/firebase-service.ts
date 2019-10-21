import { Injectable } from '@angular/core'
import { AngularFireDatabase } from 'angularfire2/database'

@Injectable()
export class FirebaseServiceProvider {
  constructor(public db: AngularFireDatabase) {
    console.log('Hello FirebaseServiceProvider Provider')
  }

  save(eventos: any) {
    this.db
      .list('eventos')
      .push(eventos)
      .then((r) => console.log(r))
  }

  listarTodos() {
    let retorno = this.db.list('eventos').snapshotChanges()
    console.log(retorno)
    retorno.map((data) => {
      return data.map((d) => ({ key: d.key, ...d.payload.val() }))
    })
  }
}
