import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../common/http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private httpService: HttpService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    let param = this.route.snapshot.params['id'];
  }

}
