import globals from "./globals.js"
import { Game, Tile, SpriteImage } from "./constants.js"

// funcion que renderiza los graficos
export default function render() {
  // change what the game is doing based on the game state
  switch (globals.gameState) {

    case Game.LOADING:
      // draw loading spinner
      break

    case Game.PLAYING:
      drawGame()
      break

    default:
      console.error("Error: Game State invalid")
  }
}

function drawGame() {
  // borramos la pantalla entera y UHD
  globals.ctx.clearRect(0, 0, globals.canvas.width, globals.canvas.height)

  // dibujar el mapa (nivel)
  renderMap()

  // dibujar los elementos
  drawSprites()
}

// función que dibuja el mapa
function renderMap() {
  const brickSize = globals.level.imageSet.gridSize
  const levelData = globals.level.data

  // dibujamos el mapa
  const num_fil = levelData.length
  const num_col = levelData[0].length

  for (let i = 0; i < num_fil; i++) {
    for (let j = 0; j < num_col; j++) {
      const tileNumber = levelData[i][j]
      const tile = globals.tileSets[tileNumber]
      const xPos = j * brickSize
      const yPos = i * brickSize + brickSize

      // dibujar el nuevo fotograma del sprite en la posicion adecuada
      globals.ctx.fillText(
        tile,
        xPos + 10,
        yPos
      )
    }
  }
}

function renderSprite(sprite) {

  // calcular la posicion del tile de inicio
/*   const xPosInit = sprite.imageSet.initCol * sprite.imageSet.gridSize
  const yPosInit = sprite.imageSet.initFil * sprite.imageSet.gridSize

  // calcular la posición en el tile a dibujar
  const xTile = xPosInit + sprite.frames.frameCounter * sprite.imageSet.gridSize + sprite.imageSet.xOffset
  const yTile = yPosInit + sprite.state * sprite.imageSet.gridSize + sprite.imageSet.yOffset */

  const xPos = Math.floor(sprite.xPos)
  const yPos = Math.floor(sprite.yPos)

  // dibujar el nuevo fotograma del sprite en la posiciónadecuada
  /* globals.ctx.drawImage(
    globals.tileSets[Tile.SIZE_16],
    xTile, yTile,
    sprite.imageSet.xSize, sprite.imageSet.ySize,
    xPos, yPos,
    sprite.imageSet.xSize, sprite.imageSet.ySize,
  ) */

    console.log(SpriteImage.PLAYER);

  // dibujar el nuevo fotograma del sprite en la posicion adecuada
  globals.ctx.fillText(
    SpriteImage.PLAYER,
    /* xPos */ 112,
    /* yPos */ 128
  )
}

// dibunar los sprites
function drawSprites() {
  for (let i = 0; i < globals.sprites.length; ++i) {
    const sprite = globals.sprites[i];

    // TEST: dibuja un rectangulo verde alrededor del sprite
    // drawSpriteRectangle(sprite)

    renderSprite(sprite)

    // TEST: dibuja el hitbox
    // drawHitBox(sprite)
  }
}