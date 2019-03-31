import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Chart.js Angular 2 Directive by Valor Software (npm)
import { RecommendComponent } from './recommend/recommend.component';
import { IboxtoolsModule } from '../components/common/iboxtools/iboxtools.module';
import { HomeComponent } from './home.component';
import { CategoriesComponent } from './categories/categories.component';
import { PlayerComponent } from '../player/player.component';
import { MinuteSecondsPipe } from '../player/minute-seconds.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    CategoriesComponent,
    PlayerComponent,
    MinuteSecondsPipe,
    RecommendComponent
  ],
  imports: [
    BrowserModule,
    IboxtoolsModule
  ],
  exports: [
    HomeComponent,
    CategoriesComponent,
    PlayerComponent,
    RecommendComponent
  ],
})

export class HomeModule {
}
