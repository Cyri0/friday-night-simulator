let playerPos = {x: 2, y: 1}
const exitPos = {x: 7, y: 9}

let enemyPos = {idx: 0, route: [
    {x: 1, y: 5},
    {x: 2, y: 5},
    {x: 3, y: 5},
    {x: 4, y: 5},
    {x: 5, y: 5},
    {x: 5, y: 6},
    {x: 5, y: 7},
    {x: 5, y: 8},
    {x: 5, y: 7},
    {x: 5, y: 6},
    {x: 5, y: 5},
    {x: 4, y: 5},
    {x: 3, y: 5},
    {x: 2, y: 5}
]}

const map = [
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,0,1,1,0,0,0,0,1],
    [1,1,0,0,0,0,1,0,1,1],
    [1,1,0,1,1,0,0,0,1,1],
    [1,1,0,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,1,1],
    [1,0,1,1,1,0,1,0,1,1],
    [1,0,0,0,1,0,1,0,1,1],
    [1,1,0,1,1,0,1,0,1,1],
    [1,1,1,1,1,1,1,9,1,1]
]

let gameMap = []

function initMap(){
    map.forEach(line => {
        let lineElements = []
        line.forEach(tileNumber => {
            let tile = createTile(tileNumber)
            lineElements.push(tile)
            gamefieldEl.appendChild(tile)
        })
        gameMap.push(lineElements)
    })
}

function removePlayer(){
    gameMap[playerPos.y][playerPos.x].innerText = ''
}

function placePlayer(){
    gameMap[playerPos.y][playerPos.x].innerText = '🤢'
}

function placeExit(){
    gameMap[exitPos.y][exitPos.x].innerText = '🚽'
}


function removeEnemy(){
    gameMap[enemyPos.route[enemyPos.idx].y][enemyPos.route[enemyPos.idx].x].innerText = ''
}

function placeEnemy(){
    gameMap[enemyPos.route[enemyPos.idx].y][enemyPos.route[enemyPos.idx].x].innerText = '💩'
}

initMap()
placePlayer()
placeExit()