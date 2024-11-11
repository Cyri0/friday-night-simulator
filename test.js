let step = 0;
const max_step = 14;

function winTest(){
    if(playerPos.x == exitPos.x &&
        playerPos.y == exitPos.y){
            return true
        }
        return false
}

function enemyTest(){
    if(playerPos.x == enemyPos.route[enemyPos.idx].x &&
        playerPos.y == enemyPos.route[enemyPos.idx].y){
            return true
        }
        return false
}


function stepTest(){
    if(step >= max_step){
        return true;
    }
    return false;
}

function tests(){
    step++
    if(winTest()){
        gameMap[playerPos.y][playerPos.x].innerText = '😎'
        return false
    }else if(stepTest()){
        gameMap[playerPos.y][playerPos.x].innerText = '🤮'
        return false
    }else if(enemyTest()){
        return false
    }
    return true
}