import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
// App views
import { DashboardsModule } from './views/dashboards/dashboards.module';
import { AppviewsModule } from './views/appviews/appviews.module';
// App modules/components
import { LayoutsModule } from './components/common/layouts/layouts.module';
import { PaginationModule, TooltipModule } from 'ngx-bootstrap';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JWTInterceptor } from './common/jwt.interceptor';
import { NgxUploaderModule } from 'ngx-uploader';
import { OauthComponent } from './oauth/oauth.component';
import { DownloadComponent } from './download/download.component';
import { SafeUrlPipe } from './download/safe-url.pipe';

@NgModule({
  declarations: [
    AppComponent,
    OauthComponent,
    DownloadComponent,
    SafeUrlPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    DashboardsModule,
    LayoutsModule,
    AppviewsModule,
    NgxUploaderModule,
    PaginationModule.forRoot(),
    TooltipModule.forRoot(),
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    {provide: HTTP_INTERCEPTORS, useClass: JWTInterceptor, multi: true}
  ],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
