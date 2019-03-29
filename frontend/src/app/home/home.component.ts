import { Component, OnInit } from '@angular/core';
import { HttpService } from '../common/http.service';
import { BsModalService } from 'ngx-bootstrap';
import { AlertService } from '../common/alert.service';
import { Router } from '@angular/router';
import { HomeConstants } from './home-constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  modelList: any;

  constructor(private httpService: HttpService,
              private modalService: BsModalService,
              private router: Router,
              private alertService: AlertService) {
  }

  ngOnInit() {
    this.httpService.get('/v1/home/home')
      .subscribe(res => {
        if (res.status === 'success') {
          this.modelList = res.data.home_model;
          console.log(this.modelList);
        }
      })
  }

  doCategoriesClick(item: any) {
    let url = `/${HomeConstants.BASE_ROUTE}/${HomeConstants.CATEGORIES_ROUTE.route}/${item.id}`;
    this.router.navigate([url]);
  }

}
