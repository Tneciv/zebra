import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Chart.js Angular 2 Directive by Valor Software (npm)
import { IboxtoolsModule } from '../components/common/iboxtools/iboxtools.module';
import { PlayerComponent } from './player.component';
import { MinuteSecondsPipe } from './minute-seconds.pipe';

@NgModule({
  declarations: [
    PlayerComponent,
    MinuteSecondsPipe
  ],
  imports: [
    BrowserModule,
    IboxtoolsModule
  ],
  exports: [
    PlayerComponent,
  ],
})

export class PlayerModule {
}
