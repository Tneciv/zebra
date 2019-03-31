import { MediaItem } from '../../player/media-item';

export class CategoryItem implements MediaItem {

  author: string;
  image: string;
  title: string;
  url: string;

  constructor(author: string,
              image: string,
              title: string,
              url: string) {
    this.author = author;
    this.image = image;
    this.title = title;
    this.url = url;
  }

}
