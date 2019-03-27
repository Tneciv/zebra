import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { HttpService } from '../common/http.service';
import { AlertService } from '../common/alert.service';
import { Constants } from '../common/constants';

@Component({
  selector: 'app-environment',
  templateUrl: './environment.component.html',
  styleUrls: ['./environment.component.css']
})
export class EnvironmentComponent implements OnInit {

  isEdit = false;
  envList: Array<any> = [{
    'environmentTag': '',
    'environmentId': '',
    'environmentName': '',
    'environmentDesc': ''
  }];
  envInfo: any = {
    'environmentDesc': '',
    'environmentName': '',
    'environmentTag': '',
  };
  modalRef: BsModalRef;

  constructor(private httpService: HttpService,
              private modalService: BsModalService,
              private alertService: AlertService) {
  }

  ngOnInit() {
    this.getEnvList();
  }

  getEnvList() {
    this.httpService.get(Constants.RESOURCE_ENV)
      .subscribe(res => {
        if (res.succ) {
          this.envList = res.content;
        } else {
          this.alertService.showError(res.msg, null);
        }
      })
  }

  openModal(template: TemplateRef<any>) {
    this.isEdit = this.envInfo.environmentId ? true : false;
    this.modalRef = this.modalService.show(template);
  }

  closeModal() {
    this.envInfo = {};
    this.modalRef.hide();
  }

  submit() {
    if (this.isEdit) {
      this.httpService.put(Constants.RESOURCE_ENV, this.envInfo)
        .subscribe(res => {
          this.closeModal();
          this.ngOnInit();
          this.alertService.handleResponse(res);
        })
    } else {
      this.httpService.post(Constants.RESOURCE_ENV, this.envInfo)
        .subscribe(res => {
          this.closeModal();
          this.ngOnInit();
          this.alertService.handleResponse(res);
        })
    }

  }

  queryByKeywords() {
  }

  doEdit(item) {
    this.envInfo = Object.assign({}, item);
  }

  doDelete(item) {
    this.httpService.delete(Constants.RESOURCE_ENV, item)
      .subscribe(res => {
        this.ngOnInit();
        this.alertService.handleResponse(res);
      })
  }

}
