import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../common/http.service';
import { ActivatedRoute } from '@angular/router';
import { MediaItem } from '../../player/media-item';
import { CategoryItem } from './category-item';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  mainContent = null;
  isShowPlayer = false;

  currentMediaItem: MediaItem = new CategoryItem('', '', '', '');

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
    this.isShowPlayer = true;
    this.currentMediaItem = new CategoryItem(this.mainContent.author,
      this.mainContent.background_img,
      content.title,
      content.media_key_full_url)
  }

}
