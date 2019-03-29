import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import 'jquery-slimscroll';
import { HomeConstants } from '../../../home/home-constants';

declare var jQuery: any;

@Component({
  selector: 'app-navigation',
  templateUrl: 'navigation.template.html'
})

export class NavigationComponent implements AfterViewInit {

  homeRoute = HomeConstants.BASE_ROUTE;

  homeList = [
    HomeConstants.CATEGORIES_ROUTE,
    HomeConstants.RECOMMEND_ROUTE,
    HomeConstants.QUOTE_ROUTE,
    HomeConstants.ALBUM_ROUTE,
    HomeConstants.SINGLE_ROUTE,
    HomeConstants.GROUP_ROUTE
  ];

  userInfo: any = {
    'userName': 'Eden',
    'companyName': 'Google',
    'avatar': ''
  }

  constructor(private router: Router) {
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
