import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { HttpService } from '../common/http.service';
import { AlertService } from '../common/alert.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {

  constructor(private httpService: HttpService,
              private modalService: BsModalService,
              private alertService: AlertService) {
  }

  ngOnInit() {
  }

}
