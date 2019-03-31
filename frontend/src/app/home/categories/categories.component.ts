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

  mainContent = null;
  isShowPlayer = false;

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
        this.mainContent = res.data;
        this.currentMediaItem.author = this.mainContent.author;
        this.currentMediaItem.image = this.mainContent.background_img;
      });

  }

  doContentItemClick(content: any) {
    console.log(content);
    this.currentMediaItem.url = content.media_key_full_url;
    this.currentMediaItem.title = content.title;
    this.isShowPlayer = true;
  }

}
