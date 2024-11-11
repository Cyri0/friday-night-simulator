let GAME_IS_RUNNING = true;

function move(xChange, yChange){
    let newPlayerPos = {
        x: playerPos.x + xChange,
        y: playerPos.y + yChange,
    }
    console.log(playerPos);
    console.log(newPlayerPos);

    if(map[newPlayerPos.y][newPlayerPos.x] != 1){
        removePlayer()
        playerPos = newPlayerPos
        placePlayer()
        GAME_IS_RUNNING = tests()
    }
}

window.addEventListener('keydown', (e)=>{
    if(!GAME_IS_RUNNING) return

    switch (e.key.toUpperCase()) {
        case 'W':move(0, -1); break;
        case 'A':move(-1, 0); break;
        case 'S':move(0, 1); break;
        case 'D':move(1, 0); break;

        default:
            break;
    }
})

placeEnemy()

let intervalId = setInterval(()=>{
    removeEnemy()
    enemyPos.idx = (enemyPos.idx + 1) % enemyPos.route.length
    placeEnemy()

    
    if(!GAME_IS_RUNNING){
        clearInterval(intervalId)
    }
    GAME_IS_RUNNING = !enemyTest()
}, 200)