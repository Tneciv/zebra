import { Component, OnInit } from '@angular/core';
import { HttpService } from '../common/http.service';
import { BsModalService } from 'ngx-bootstrap';
import { AlertService } from '../common/alert.service';

@Component({
  selector: 'app-release',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  modelList: any;

  constructor(private httpService: HttpService,
              private modalService: BsModalService,
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

}
