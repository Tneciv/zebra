import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../common/http.service';
import { ActivatedRoute } from '@angular/router';
import { MediaItem } from '../../player/media-item';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  currentMediaItem: MediaItem = {
    url: 'http://cdn.vistopia.com.cn/1535343150532.mp3',
    author: '梁文道',
    title: 'testTitle',
    image: 'http://cdn.vistopia.com.cn/1535342540956.png'
  };

  constructor(private httpService: HttpService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {

    let id = this.route.snapshot.params['id'];
    this.httpService.get(`/v1/content/catalog/${id}`)
      .subscribe(res => {
        console.log(res);
      });

  }

}
