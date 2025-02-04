import globals from "./globals.js"
import { Game, Tile } from "./constants.js"

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
  // drawSprites()

  // dibujamos el UHD
  // renderUHD()
}

// función que dibuja el mapa
function renderMap() {
  const brickSize = globals.level.imageSet.gridSize
  // const brickSize = 16
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
        xPos + 10, yPos
      )
    }
  }
}