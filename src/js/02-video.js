import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);



    player.on('timeupdate', function(currentTime) {
        localStorage.setItem("videoplayer-current-time", JSON.stringify(currentTime));    
    });

    