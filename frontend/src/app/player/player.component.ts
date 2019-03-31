import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MediaItem } from './media-item';

declare var $: any;

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit, OnChanges {

  @Input() mediaItem: MediaItem;

  isPlaying = false;
  currentAudio = new Audio();

  constructor() {
  }

  ngOnInit() {
    this.mediaItem.image = `url(${this.mediaItem.image})`;
    this.currentAudio.src = this.mediaItem.url;
    this.currentAudio.addEventListener('timeupdate', (currentTime) => {
    });
    this.doPlay();
  }

  doPlay() {
    this.isPlaying = true;
    this.currentAudio.play();
  }

  doPause() {
    this.isPlaying = false;
    this.currentAudio.pause();
  }

  doHeartClick() {
    console.log('Not finished yet');
  }

  ngOnChanges(changes: any): void {
    this.mediaItem = changes.mediaItem.currentValue;
    if (!changes.mediaItem.firstChange) {
      this.ngOnInit();
    }
  }

}
