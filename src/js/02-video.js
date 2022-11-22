import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// инициализация плейера
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
// ключ хранилища
const STORAGE_KEY = 'videoplayer-current-time';

//запись текущего времени в хранилище
const onPlay = evt => {
  const positionPlayer = evt.seconds;
  localStorage.setItem(STORAGE_KEY, positionPlayer);
};

// отслеживание текущего момента (событие timeupdate)
player.on('timeupdate', throttle(onPlay, 1000));

// возврат в хранилище сохраненного момента 
const getCurrentTime = localStorage.getItem(STORAGE_KEY);
 
//восстановление момента воспроизводства видео при перезагрузке
player.setCurrentTime(getCurrentTime);
