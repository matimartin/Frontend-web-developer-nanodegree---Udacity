"use strict";
/*
 use strict.Primero, elimina algunos errores silenciosos de JavaScript haciendo que lancen excepciones.
 Segundo, corrige errores que hacen que sea difícil para los motores de JavaScript realizar optimizaciones.
 Tercero, prohibe cierta sintaxis que es probable que sea definida en futuras versiones de ECMAScript.
*/

/*asignacion de expresion q representa al enemigo que el player debe evitar*/
var Enemy = function(y){
    this.x = randomize(200,1010);
    this.y = y;
    this.width = 50;
    this.height = 50;
    this.speed = randomize(300,500);
    this.sprite = 'images/enemy-bug.png';
};

/*Actualizo la posicion del enemigo*/
Enemy.prototype.update = function(dt){ //dt:diferencial del tpo
    this.x = this.x + this.speed * dt; //Object.prototype representa al objeto prototipo de Object.
    if(this.x > 1000){
        this.x = (-200, -1000);
        this.speed = (300,500);
    }
};

/*Esta funcion es la que dibuja al enemigo en la pantalla*/
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y); //API Canvas 2D proporciona diferentes formas para dibujar una imagen
};                                                             //https://developer.mozilla.org/es/docs/Web/API/CanvasRenderingContext2D/drawImage

/*Creo y asigno ropiedades al jugador*/
var Player = function(){
    this.x = 404;
    this.y = 300;
    this.width = 50;
    this.height = 50;
    this.sprite = 'images/char-boy.png';
};

/*Actualiza la posicion del player*/
Player.prototype.update = function(){
    checkForCollisions();
    if(this.y > 42){
        this.y = 300;
        stats.setNewScore(1);
        document.getElementById('score').innerHTML = stats.getScore(); //innerHTML cambia o devuelve la sintaxis HTML
        console.log(stats.getScore());
/*Check if you won the game*/
        if (stats.getScore() === 5) {
            alert('Congratulations!\nYou won!!!');
            location.reload();
        }
    }
}

Player.prototype.render = function(dt) {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

/*inicializo los objetos enemigos*/
var enemy1 = new Enemy(50);
var enemy2 = new Enemy(120);
var enemy3 = new Enemy(200);
var enemy4 = new Enemy(90);
var enemy5 = new Enemy(120);
var enemy6 = new Enemy(200);

var allEnemies = [enemy1, enemy2, enemy3, enemy4, enemy5, enemy6];

/*inicializo el jugador*/
var player = new Player();

/*Fc llamada por el player*/
function checkForCollisions(){
    for(var i = 0; i < allEnemies.lenght; i++){
        if(player.x < allEnemies[i].x + allEnemies[i].width &&
           player.x + player.width > allEnemies[i].x &&
           player.y < allEnemies[i].y + allEnemies[i].height &&
           player.y + player.height > allEnemies[i].y) {
               collisionAudio.play();
               player.x = 202;
               player.y = 300;
               stats.setNewLives(1);
               document.getElementById('lives').innerHTML = stats.getLives();
               if (stats.getLives() === 0) {
                   alert('Do you want to play again?');
                   location.reload();
               }
           }
    }
}

function randomize(min,max){
    return Math.floor((Math.random()*(min-max)+min)); //floor:Devuelve el máximo entero menor o igual a un número
}

var stats = function(){
    var score = 0;
    var lives = 3;
    return {              //retorna un JSON {clave:valor},
        setNewScore: function(n) {
            score = score + n;
        },
        getNewScore: function() {
            return score;
        },
        setNewLives: function(n) {
            lives = lives - 1;
        },
        getNewLives: function() {
            return lives;
        }
    };
}();

/*constructor para crear el objeto Audio*/
var collisionAudio = new Audio('sounds/crunch.wav');
