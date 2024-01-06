var score = 0;



//navigator.mediaDevices.getUserMedia({ audio: true })
//  .then(function(stream) {})
//  .catch(function(err) {
//    console.log('Ошибка при запросе доступа к медиаустройству:', err);});


var randomValue = Math.floor(Math.random() * 3);
//console.log(randomValue);
var ghost_door = document.getElementById("door" + randomValue);
ghost_door.setAttribute("onClick", "gameOver()");
document.getElementById("door" + ((randomValue+1)%3)).setAttribute("onClick", "goodDoor()");
document.getElementById("door" + ((randomValue+2)%3)).setAttribute("onClick", "goodDoor()");

function gameOver(){
    var elements = document.querySelectorAll('body *:not(body)');
    for (var i = 0; i < elements.length; i++) {
    elements[i].style.display = 'none';
    }

    var audio = new Audio('IMG/ghost_sound.mp3');
    var element = document.getElementById("body");
    audio.play();

    element.style.background = "url('IMG/ghost.jpg') center/cover no-repeat";
    element.style.height = window.innerHeight + "px";
    setTimeout(function() {
        var gameOverText = document.createElement("h1");
        gameOverText.innerText = "GAME OVER";
        gameOverText.style.color = "red";
        gameOverText.style.textAlign = "center";

        document.body.appendChild(gameOverText);

        var scoreText = document.createElement("p");
        scoreText.innerText = "Вы дошли до комнаты номер " + score;
        scoreText.style.color = "red";
        scoreText.style.textAlign = "center";

        document.body.appendChild(scoreText);


        
        var restartButton = document.createElement("button");
        restartButton.innerText = "Заново";
        restartButton.style.backgroundColor = "black";
        restartButton.style.color = "red";
        restartButton.style.borderRadius = "25px";
        restartButton.style.width = "100px";
        restartButton.style.height = "50px";

        restartButton.style.position = "fixed";
        restartButton.style.top = "50%";
        restartButton.style.left = "50%";
        restartButton.style.transform = "translate(-50%, -50%)";

        restartButton.setAttribute("onClick", "restart()")
        document.body.appendChild(restartButton);
      }, 2000);
}


function restart(){
    location.reload();
}


function goodDoor(){
    if(score == 10){
        goodGame();
        return;
    }

    //var sRoom = document.getElementById('scoreRoom');
    //body.removeChild(sRoom);

    var door_audio = new Audio("IMG/door.mp3");
    door_audio.play();
    score += 1;
    var elements = document.getElementsByClassName('text');
    for (var i = 0; i < elements.length; i++) {
    elements[i].style.display = 'none';
    }


    var nextText = document.createElement('h1');
    nextText.innerText = ("Вы попали в комнату номер " + score);
    nextText.style.textAlign = "center";
    nextText.style.color = "red";

    document.body.appendChild(nextText);

    setTimeout(function(){

        //var scoreRoom = document.createElement('p');
        //scoreRoom.innerText = 'Вы в комнате номер ' + score;
        //scoreRoom.style.textAlign = 'center';
        //scoreRoom.style.color = 'black';
        //scoreRoom.style.fontWeight = 'bold';
        //scoreRoom.setAttribute('id', 'scoreRoom');
        //scoreRoom.setAttribute('class', 'text');
        //scoreRoom.style.display = 'block';
        //document.body.appendChild(scoreRoom);
        
        
        randomValue = Math.floor(Math.random() * 3);
        //console.log(randomValue);
        ghost_door = document.getElementById("door" + randomValue);
        ghost_door.setAttribute("onClick", "gameOver()");
        document.getElementById("door" + ((randomValue+1)%3)).setAttribute("onClick", "goodDoor()");
        document.getElementById("door" + ((randomValue+2)%3)).setAttribute("onClick", "goodDoor()");
        
        for(var i = 0; i < elements.length; i++){
            elements[i].style.display = "block";
        }

        var scoreRoom = document.getElementById('scoreRoom');
        scoreRoom.innerHTML = 'Вы в комнате номер ' + score;
        scoreRoom.style.textAlign = 'center';
        scoreRoom.style.color = 'black';
        scoreRoom.style.fontWeight = 'bold';
        //document.body.appendChild(scoreRoom);
        body.removeChild(nextText);
    
    }, 3500);
    
    
    
}


function goodGame(){
    var elements = document.querySelectorAll('body *:not(body)');
    for (var i = 0; i < elements.length; i++) {
    elements[i].style.display = 'none';
    }

    var audio1 = new Audio('IMG/forest.mp3');
    var element1 = document.getElementById("body");
    audio1.play();

    element1.style.background = "url('IMG/forest.jpg') center/cover no-repeat";
    element1.style.height = window.innerHeight + "px";

    setTimeout(function() {
        var gameOverText = document.createElement("h1");
        gameOverText.innerText = "Вы прошли игру";
        gameOverText.style.color = "red";
        gameOverText.style.textAlign = "center";

        document.body.appendChild(gameOverText);

        var scoreText = document.createElement("p");
        scoreText.innerText = "Вы дошли до комнаты номер " + score;
        scoreText.style.color = "red";
        scoreText.style.textAlign = "center";

        document.body.appendChild(scoreText);


        

        var menuButton = document.createElement("button");
        menuButton.innerText = "Меню";
        menuButton.style.backgroundColor = "black";
        menuButton.style.color = "red";
        menuButton.style.borderRadius = "25px";
        menuButton.style.width = "100px";
        menuButton.style.height = "50px";

        menuButton.style.position = "fixed";
        menuButton.style.top = "50%";
        menuButton.style.left = "50%";
        menuButton.style.transform = "translate(-50%, -50%)";
        
        menuButton.setAttribute("onClick", "menu()")
        document.body.appendChild(menuButton);
      }, 2000);    
}

function menu(){
    window.open('https://progronick.github.io/ghost_game/', '_blank');
}
