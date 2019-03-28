import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { StarterViewComponent } from './starterview.component';
import { LoginComponent } from './login.component';

import { PeityModule } from '../../components/charts/peity';
import { SparklineModule } from '../../components/charts/sparkline';
import { HttpService } from '../../common/http.service';
import { ModalModule, PaginationModule, TabsModule, TooltipModule } from 'ngx-bootstrap';
import { HomeComponent } from '../../home/home.component';
import { FormsModule } from '@angular/forms';
import { EnvironmentComponent } from '../../environment/environment.component';
import { WriteAccessPipe } from '../../home/write-access.pipe';
import { AlertService } from '../../common/alert.service';
import { NgxUploaderModule } from 'ngx-uploader';
import { DynamicKeyPipe } from '../../home/dynamic-key.pipe';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [
    StarterViewComponent,
    LoginComponent,
    EnvironmentComponent,
    WriteAccessPipe,
    DynamicKeyPipe,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    PeityModule,
    FormsModule,
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    NgxUploaderModule,
    TooltipModule.forRoot(),
    SweetAlert2Module.forRoot({
      showCancelButton: true,
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      confirmButtonColor: '#1ab394',
      cancelButtonColor: '#d33',
    }),
    SparklineModule
  ],
  exports: [
    StarterViewComponent,
    LoginComponent,
    EnvironmentComponent,
    HomeComponent
  ],
  providers: [
    HttpService, AlertService
  ]
})

export class AppviewsModule {
}
