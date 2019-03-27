import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import 'jquery-slimscroll';
import { Constants } from '../../../common/constants';

declare var jQuery: any;

@Component({
  selector: 'app-navigation',
  templateUrl: 'navigation.template.html'
})

export class NavigationComponent implements AfterViewInit {

  userInfo: any = {
    'userName': '',
    'companyName': '',
    'avatar': ''
  }

  constructor(private router: Router) {
    // let userStr = sessionStorage.getItem(Constants.USER_INFO);
    // this.userInfo = JSON.parse(userStr);
  }

  ngAfterViewInit() {
    jQuery('#side-menu').metisMenu();

    if (jQuery('body').hasClass('fixed-sidebar')) {
      jQuery('.sidebar-collapse').slimscroll({
        height: '100%'
      })
    }
  }

  activeRoute(routename: string): boolean {
    return this.router.url.indexOf(routename) > -1;
  }

}
