import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import 'jquery-slimscroll';

declare var jQuery: any;

@Component({
  selector: 'app-navigation',
  templateUrl: 'navigation.template.html'
})

export class NavigationComponent implements AfterViewInit {

  // 今日推荐 / recommended
  //
  // 耳界 / categories
  //
  // 遇见 / quote
  //
  // 杰作 / album
  //
  // 八分 / single
  //
  // 博雅 / group

  homeRoute = 'home';

  homeList = [
    {route: 'recommend', name: '今日推荐'},
    {route: 'categories', name: '耳界'},
    {route: 'quote', name: '遇见'},
    {route: 'album', name: '杰作'},
    {route: 'single', name: '八分'},
    {route: 'group', name: '博雅'}
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
