
/* Event Listeners */
document.body.addEventListener('keydown', (e) => {
    e.preventDefault();
});

document.body.addEventListener('keyup', keyPress);

/* Player position. */
var position = {
    X: 0,
    Y: 0
};

/* Selected map. */
var selectedMap = tileMap01;

/* Make Tile Id based on x and y coordinates. */
function makeTileId(x, y)
{
    return 'x' + x.toString() + 'y' + y.toString();
}

/* Get Tile Type. */
function getTileType(x, y)
{
    return document.getElementById(makeTileId(x, y)).className;
}

/* Set Tile */
function setTile(x, y, tile)
{
    document.getElementById(makeTileId(x, y)).className = tile;
}

/* Set up a new game and update the map. */
function newGame(map)
{
    selectedMap = map;
    document.getElementById("game").outerHTML = 
        '<main id="game" style="display: grid; grid-template: repeat(' + 
        selectedMap.height.toString() + ', 1fr) / repeat(' + 
        selectedMap.width.toString() + ', 1fr);"></main>';

    document.getElementById("game").innerHTML = '';
    for (y = 0; y < selectedMap.height; y++)
    {
        for (x = 0; x < selectedMap.width; x++)
        {
            var tileType;
            switch(selectedMap.mapGrid[y][x].toString())
            {
                case 'W':
                    tileType = Tiles.Wall;
                    break;

                case 'G':
                    tileType = Tiles.Goal;
                    break;

                case 'B':
                    tileType = Entities.Block;
                    break;

                case 'P':
                    tileType = Entities.Player;
                    position.X = x;
                    position.Y = y;
                    break;

                default:
                    tileType = Tiles.Space;
            }
            let tileElement = document.createElement('div');
            tileElement.id = makeTileId(x, y);
            tileElement.className = tileType;
            document.getElementById("game").appendChild(tileElement);
        }
    }
}

/* Handle keypresses */
function keyPress(e)
{
    switch (e.key)
    {
        case 'ArrowUp':
            movePlayer(0, -1);
            break;

        case 'ArrowDown':
            movePlayer(0, 1);
            break;
                
        case 'ArrowLeft':
            movePlayer(-1, 0);
            break;
                    
        case 'ArrowRight':
            movePlayer(1, 0);
            break;
    }
}

/* Handle player movement and pushing blocks. */
function movePlayer(x, y)
{
    var playerElement = getTileType(position.X, position.Y);
    var targetX = position.X + x;
    var targetY = position.Y + y;
    if ((targetX < 0) || (targetX > selectedMap.width)) return;
    if ((targetY < 0) || (targetY > selectedMap.height)) return;
    var targetElement = getTileType(targetX, targetY);

    if ((targetElement == Tiles.Space) || (targetElement == Tiles.Goal))
    {
        if (targetElement == Tiles.Goal)
        {
            setTile(targetX, targetY, Entities.PlayerGoal);
        }
        else
        {
            setTile(targetX, targetY, Entities.Player);
        }
        if (playerElement == Entities.PlayerGoal)
        {
            setTile(position.X, position.Y, Tiles.Goal);
        }
        else
        {
            setTile(position.X, position.Y, Tiles.Space);
        }      
        position.X = targetX;
        position.Y = targetY;
    }
    else if ((targetElement == Entities.Block) || (targetElement == Entities.BlockDone))
    {
        var blockTargetX = targetX + x;
        var blockTargetY = targetY + y;
        if ((blockTargetX  < 0) || (blockTargetX > selectedMap.width)) return;
        if ((blockTargetY < 0) || (blockTargetY > selectedMap.height)) return;
        var blockTargetElement = getTileType(blockTargetX, blockTargetY);

        if ((blockTargetElement == Tiles.Space) || (blockTargetElement == Tiles.Goal))
        {
            if (blockTargetElement == Tiles.Goal)
            {
                setTile(blockTargetX, blockTargetY, Entities.BlockDone);
            }
            else
            {
                setTile(blockTargetX, blockTargetY, Entities.Block);
            }
            if (targetElement == Entities.BlockDone)
            {
                setTile(targetX, targetY, Entities.PlayerGoal);
            }
            else
            {
                setTile(targetX, targetY, Entities.Player);
            }
            if (playerElement == Entities.PlayerGoal)
            {
                setTile(position.X, position.Y, Tiles.Goal);
            }
            else
            {
                setTile(position.X, position.Y, Tiles.Space);
            }
            position.X = targetX;
            position.Y = targetY;

            if (getRemainingGoals() == 0)
            {
                alert("You won!");
                newGame(selectedMap);
            }
        }
    }
}

/* Get number of remaining goals. */
function getRemainingGoals()
{
    var goals = 0;
    for (y = 0; y < selectedMap.height; y++)
    {
        for (x = 0; x < selectedMap.width; x++)
        {
            if ((getTileType(x, y) == Tiles.Goal) || ((getTileType(x, y) == Entities.PlayerGoal)))
            {
                goals++;
            }
        }
    }
    return goals;
}
