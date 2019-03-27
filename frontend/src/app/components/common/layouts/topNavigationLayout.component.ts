import { Component, HostListener, OnInit } from '@angular/core';
import { detectBody } from '../../../app.helpers';

declare var jQuery: any;

@Component({
  selector: 'app-topnavigationlayout',
  templateUrl: 'topNavigationLayout.template.html'
})
export class TopNavigationLayoutComponent implements OnInit {

  @HostListener('host') host: {
    '(window:resize)': 'onResize()'
  }

  public ngOnInit(): any {
    detectBody();
  }

  public onResize() {
    detectBody();
  }

}
