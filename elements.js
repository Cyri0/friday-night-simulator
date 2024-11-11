const gamefieldEl = document.getElementById("gamefield")

function createTile(number){
    let tile = document.createElement('div')
    tile.classList.add('tile')
    tile.classList.add('type-'+number)
    return tile
}