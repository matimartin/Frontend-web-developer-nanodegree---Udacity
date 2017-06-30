"use strict";
/*
 "use strict". 1ro, elimina algunos errores silenciosos de JavaScript haciendo que lancen excepciones.
 2do, corrige errores que hacen que sea difícil para los motores de JavaScript realizar optimizaciones.
 3ro, prohibe cierta sintaxis que es probable que sea definida en futuras versiones de ECMAScript.
*/

/*asignacion de expresion q representa al enemigo que el player debe evitar*/
var Enemy = function(y){
    this.x = randomize(200,1010);
    this.y = y;
    this.width = 50;    // width = ancho
    this.height = 50;   // height = alto
    this.speed = randomize(300,500);
    this.sprite = 'images/enemy-bug.png';
};

/*Actualizo la posicion del enemigo*/
Enemy.prototype.update = function(dt){ // dt:diferencial del tpo
    this.x = this.x + this.speed * dt; // Object.prototype representa al objeto prototipo de Object.
    if(this.x > 1000){
        this.x = (-200, -1000);
        this.speed = (300,500);
    }
};

/*Esta funcion es la que dibuja al enemigo en la pantalla*/
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y); //API Canvas 2D proporciona diferentes formas para dibujar una imagen
};                                                             //https://developer.mozilla.org/es/docs/Web/API/CanvasRenderingContext2D/drawImage

/* Creo y asigno propiedades al jugador
 * @constructor */
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

/*
 * La propiedad Object.prototype representa al objeto prototipo de Object. Todos los objetos en JS provienen de
 * Object; todos los objetos heredan métodos y propiedades de Object.prototype, aunque pueden ser sobrecargados
 * (excepto un Object con una propiedad null, p.e. Object.create(null)). Por ejemplo, otros prototipos de los
 * constructores sobrecargan la propiedad del constructor y proporcionan su propio método toString(). Los cambios
 * hechos al objeto prototipo Object se propagan a todos los objetos a menos que las propiedades y métodos sujetos
 * a dichos cambios sean sobrecargados aún más a lo largo de la cadena del prototipo.
*/


/* Actualizo la posicion del jugador basado en la tecla presionada
 * @param key - Una representacion de strings disponibles para los movimientos */
Player.prototype.handleInput = function(key) {
    if (key === 'left') {
        if (this.x === 0) {
            this.x = 0;
        } else {
            this.x -= 100;
        }
    }
    if (key === 'right') {
        if (this.x === 909) {
            this.x = 909;
        } else {
            this.x += 101;
        }
    }
    if (key === 'down') {
        if (this.y === 386) {
            this.y = 386;
        } else {
            this.y += 386;
        }

        var enemy1 = new Enemy(50);
        var enemy2 = new Enemy(120);
        var enemy3 = new Enemy(200);
        var enemy4 = new Enemy(50);
        var enemy5 = new Enemy(120);
        var enemy6 = new Enemy(120);
    }
    if (key === 'up') {
        this.y = 86;
    }
};

/* Inicializo los objetos enemigos */
var enemy1 = new Enemy(50);
var enemy2 = new Enemy(120);
var enemy3 = new Enemy(200);
var enemy4 = new Enemy(90);
var enemy5 = new Enemy(120);
var enemy6 = new Enemy(200);

var allEnemies = [enemy1, enemy2, enemy3, enemy4, enemy5, enemy6];

/*inicializo el jugador*/
var player = new Player();

/*Este listener envia las teclas seleccionadas a mi player*/
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});

/*funcion llamada por el player*/
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
