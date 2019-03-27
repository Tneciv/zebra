import { Component, OnDestroy, OnInit, TemplateRef, } from '@angular/core';
import { HttpService } from '../../common/http.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { AlertService } from '../../common/alert.service';

@Component({
  selector: 'app-starter',
  templateUrl: 'starter.template.html'
})
export class StarterViewComponent implements OnDestroy, OnInit {

  public nav: any;
  public productList: any = [];
  public keywords: string;
  public modalRef: BsModalRef;
  public prodInfo: any = {};
  public apiList: any = [];

  public constructor(private httpService: HttpService,
                     private modalService: BsModalService,
                     private alertService: AlertService) {
    this.nav = document.querySelector('nav.navbar');
  }

  public ngOnInit(): any {
    this.nav.className += ' white-bg';
    this.getLogList();
  }

  public ngOnDestroy(): any {
    this.nav.classList.remove('white-bg');
  }

  public getLogList() {
    let paraObj = {
      'keywords': this.keywords
    };
    this.httpService.get('/product', paraObj)
      .subscribe(res => {
        this.productList = res.content;
      }, err => {
        this.alertService.showError(err.msg, null);
      });
  }

  public queryByKeywords() {

  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    this.getApiList();
  }

  getApiList() {
    this.httpService.get('/api')
      .subscribe(res => {
        this.apiList = res.content;
      });
  }

  submit() {
    let checkApiList = this.apiList.filter(api => api.completed === true);
    if (checkApiList.length > 0) {
      this.prodInfo.apis = checkApiList;
      this.httpService.post('/product', this.prodInfo)
        .subscribe(res => {
          this.alertService.handleResponse(res);
          this.closeModal();
          this.ngOnInit();
        });
    }
  }

  closeModal() {
    this.prodInfo = {};
    this.modalRef.hide();
  }

  deleteProd(item) {
    this.httpService.delete('/product', item)
      .subscribe(res => {
        this.alertService.handleResponse(res);
        this.ngOnInit();
      });
  }

}
