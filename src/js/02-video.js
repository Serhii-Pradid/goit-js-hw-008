import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);



    player.on('timeupdate', function(currentTime) {
        localStorage.setItem("videoplayer-current-time", JSON.stringify(currentTime));    
    });

    