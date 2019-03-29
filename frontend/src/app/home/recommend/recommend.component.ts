import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../common/alert.service';

@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.css']
})
export class RecommendComponent implements OnInit {

  constructor(private alertService: AlertService) {
  }

  ngOnInit() {
    this.alertService.showWarn('', '');
  }

}
