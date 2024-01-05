function start_game(){
    window.open('https://progronick.github.io/ghost_game/room.html', '_blank');
}



navigator.mediaDevices.getUserMedia({ audio: true })
  .then(function(stream) {
    music();
  })
  .catch(function(err) {
    console.log('Ошибка при запросе доступа к медиаустройству:', err);
    var audio = new Audio('IMG/menu_sound.mp3');
    audio.play();
});



function music(){
    var audio = new Audio('IMG/menu_sound.mp3');
    audio.play();
}