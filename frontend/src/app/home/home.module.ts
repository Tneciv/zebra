import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Chart.js Angular 2 Directive by Valor Software (npm)
import { RecommendComponent } from './recommend/recommend.component';
import { IboxtoolsModule } from '../components/common/iboxtools/iboxtools.module';
import { HomeComponent } from './home.component';
import { CategoriesComponent } from './categories/categories.component';

@NgModule({
  declarations: [
    HomeComponent,
    CategoriesComponent,
    RecommendComponent
  ],
  imports: [
    BrowserModule,
    IboxtoolsModule
  ],
  exports: [
    HomeComponent,
    CategoriesComponent,
    RecommendComponent
  ],
})

export class HomeModule {
}
