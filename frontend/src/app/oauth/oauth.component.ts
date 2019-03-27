import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../common/http.service';
import { Constants } from '../common/constants';
import { AlertService } from '../common/alert.service';

@Component({
  selector: 'app-oauth',
  templateUrl: './oauth.component.html',
  styleUrls: ['./oauth.component.css']
})
export class OauthComponent implements AfterViewInit {

  loginAction = `${Constants.API_PREFIX}/oauth/login`;

  @ViewChild('loginBtn')
  loginBtn: ElementRef;

  constructor(private activatedRoute: ActivatedRoute,
              private httpService: HttpService,
              private alertService: AlertService,
              private router: Router) {
  }

  doLogin() {
    let el: HTMLElement = this.loginBtn.nativeElement as HTMLElement;
    el.click();
  }

  ngAfterViewInit(): void {

    if (1 === 1) {
      this.router.navigateByUrl('home');
      return;
    }

    this.activatedRoute.queryParams.subscribe(params => {
      let data = params['code'];
      if (data) {
        this.httpService.get(`/oauth/accesstoken/callback?authCode=${data}`)
          .subscribe(res => {
            if (res.succ) {
              sessionStorage.setItem(Constants.USER_INFO, JSON.stringify(res.content));
              sessionStorage.setItem(Constants.TOKEN_KEY, res.content.token);
              this.router.navigateByUrl('release');
            } else {
              this.alertService.showError(res.msg, '');
            }
          }, err => {
            this.alertService.showError(err, '');
          })
      } else {
        this.doLogin();
      }
    });
  }

}
