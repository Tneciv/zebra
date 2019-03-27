import { Component, ElementRef, ViewChild } from '@angular/core';
import { smoothlyMenu } from '../../../app.helpers';
import { Router } from '@angular/router';

declare var jQuery: any;

@Component({
  selector: 'app-topnavbar',
  templateUrl: 'topnavbar.template.html'
})
export class TopNavbarComponent {

  @ViewChild('logoutBtn')
  logoutBtn: ElementRef;

  constructor(private router: Router) {

  }

  toggleNavigation(): void {
    jQuery('body').toggleClass('mini-navbar');
    smoothlyMenu();
  }

  doLogout() {
    sessionStorage.clear();
    let el: HTMLElement = this.logoutBtn.nativeElement as HTMLElement;
    el.click();
  }

}
