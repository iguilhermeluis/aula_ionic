import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdicionarEventosPage } from './adicionar-eventos';

@NgModule({
  declarations: [
    AdicionarEventosPage,
  ],
  imports: [
    IonicPageModule.forChild(AdicionarEventosPage),
  ],
})
export class AdicionarEventosPageModule {}
