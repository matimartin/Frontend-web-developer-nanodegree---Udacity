/*Actualiza todas las entidades del juago mediante updateEntities*/
function update(dt){
    updateEntities(dt); //checkCoallisions();
}

/*Acutualiza con un forEach a allEnemies definidos en un array en app.js*/
function updateEntities(dt){
    allEnemies.forEach(factunction(enemy){
        enemy.update(dt);
    });
    player.updaupdatete();
}

function render() {

}
