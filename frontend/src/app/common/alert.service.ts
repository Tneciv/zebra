import { Injectable } from '@angular/core';
import Swal, { SweetAlertResult, SweetAlertType } from 'sweetalert2';

@Injectable()
export class AlertService {

  static readonly DEFAULT_TIMER = 2000;

  constructor() {
  }

  showAlert(title: string, message: string, type: SweetAlertType, timer: number = AlertService.DEFAULT_TIMER): Promise<SweetAlertResult> {
    return Swal({
      title: title,
      text: message,
      timer: timer,
      type: type,
      confirmButtonText: '确定'
    });
  }

  handleResponse(response: any): Promise<SweetAlertResult> {
    if (response.succ === true) {
      return this.showSucc(response.msg, null);
    } else {
      return this.showError(response.msg, null);
    }
  }

  showSucc(title: string, message: string): Promise<SweetAlertResult> {
    return this.showAlert(title, message, 'success');
  }

  showError(title: string, message: string): Promise<SweetAlertResult> {
    return this.showAlert(title, message, 'error');
  }

  showWarn(title: string, message: string): Promise<SweetAlertResult> {
    return this.showAlert(title, message, 'warning');
  }

}
