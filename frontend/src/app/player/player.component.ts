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

  constructor() {
  }

  ngOnInit() {
    $('#player').hover(function () {
      $('.info').toggleClass('up');
    });

    let audio = new Audio('http://cdn.vistopia.com.cn/1535343150532.mp3');

    $('.pause').hide(); // hide pause button until clicked

    // play button
    $('.play').click(function () {
      audio.play();
      $('.play').hide();
      $('.pause').show();
    });

  }

}
