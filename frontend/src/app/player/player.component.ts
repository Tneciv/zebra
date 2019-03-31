import { Component, Input, OnInit } from '@angular/core';
import { MediaItem } from './media-item';

declare var $: any;

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  @Input() mediaItem: MediaItem;

  isPlaying = false;
  currentAudio = new Audio();

  constructor() {
  }

  ngOnInit() {

    this.mediaItem.image = `url(${this.mediaItem.image})`;

    $('#player').hover(function () {
      $('.info').toggleClass('up');
    });

    this.currentAudio.src = this.mediaItem.url;
    this.currentAudio.addEventListener('timeupdate', (currentTime) => {
    });

  }

  doPlay() {
    this.playStatusChanged();
    this.currentAudio.play();
  }

  doPause() {
    this.playStatusChanged();
    this.currentAudio.pause();
  }

  doHeartClick() {
  }

  playStatusChanged() {
    $('.info').toggleClass('up');
    this.isPlaying = !this.isPlaying;
  }

}
