import { Component } from '@angular/core';
import { smoothlyMenu } from '../../../app.helpers';

declare var jQuery: any;

@Component({
  selector: 'app-topnavigationnavbar',
  templateUrl: 'topnavigationnavbar.template.html'
})
export class TopNavigationNavbarComponent {

  static toggleNavigation(): void {
    jQuery('body').toggleClass('mini-navbar');
    smoothlyMenu();
  }

}
