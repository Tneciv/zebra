import { Component } from '@angular/core';
import { HttpService } from '../../common/http.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.template.html'
})
export class LoginComponent {

  public constructor(private httpService: HttpService) {

  }

}
