import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const LOCAL_KEY = 'videoplayer-current-time';
player.on(
  'timeupdate',
  throttle(function ({ seconds }) {
    localStorage.setItem(LOCAL_KEY, seconds);
  }, 1000)
);

player.setCurrentTime(localStorage.getItem(LOCAL_KEY) || 0);
