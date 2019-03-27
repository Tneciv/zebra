import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlertService } from '../common/alert.service';
import { Constants } from '../common/constants';

declare var $: any;

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {

  envTag = '';
  platformType = '';
  releaseInfo = {
    'releaseId': '',
    'releaseNote': '',
    'versionName': '',
    'packageName': '',
    'releaseEnvironmentId': '',
    'platformType': '',
    'filePath': '',
    'updateTime': '',
    'environmentName': '',
    'environmentDesc': '',
    'environmentTag': ''
  }

  constructor(private activatedRoute: ActivatedRoute,
              private alertService: AlertService,
              private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.platformType = this.getPlatformTypeFromUa();
    this.activatedRoute.queryParams.subscribe(params => {
      let data = params['envTag'];
      if (data) {
        this.envTag = data;
        let paraObj = {'envTag': this.envTag, 'platform': this.platformType};
        let request: Observable<any> = this.httpClient
          .get(`${Constants.API_PREFIX}/${Constants.RESOURCE_RELEASE}/callback`, {params: paraObj});
        request.subscribe(res => {
          this.releaseInfo = res.content;
          if (this.platformType === 'ios') {
            this.releaseInfo.filePath = `itms-services://?action=download-manifest&url=${this.releaseInfo.filePath}`;
          }
        }, err => {
          this.alertService.showError('请求异常', err.statusText);
        });
      }
    })
  }

  getPlatformTypeFromUa(): string {
    if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
      return 'ios';
    } else if (/(Android)/i.test(navigator.userAgent)) {
      return 'android';
    } else {
      return 'pc';
    }
  }

  doAndroidDownload() {
    this.inAppNotice();
  }

  isWechatorQQ() {
    let u = navigator.userAgent.toLowerCase();
    return u.match(/QQ\/[0-9]/i) || u.match(/MicroMessenger\/[0-9]/i);
  }

  doIOSdownload() {
    this.inAppNotice();
    if (!this.isWechatorQQ()) {
      $('.downLayerBg').hide();
      $('.downLayer').hide();
      $('.downImgBox').hide();
      $('.downLayerBg_help').show();
      $('.downLayer_help').show();
    }
  }

  inAppNotice() {
    if (this.isWechatorQQ()) {
      scroll(0, 0);
      $('.downLayerBg').show();
      $('.downLayer').show();
    }
  }

}
