import globals from "./globals.js"
import { Game, SpriteID, State } from "./constants.js"
// import detectCollisions from "./collisions.js"

export default function update() {

  // change what the game is doing based on the game state
  switch (globals.gameState) {
    case Game.LOADING:
      console.log("Loading assets...")
      break

    case Game.PLAYING:
      playGame()
      break

    default:
      console.error("Error: Game State invalid")
  }
}

function playGame() {
  // actualiza la física de sprites
  updateSprites()
  // colisiones
  // detectCollisions()
  // actualizar la lógica del juego
  // updateGameTime()


  // actualizar las variables del juego
  // updateLevelTime()
  // updateLife()

}
function updateSprites() {
  for (let i = 0; i < globals.sprites.length; i++) {
    const sprite = globals.sprites[i]
    updateSprite(sprite)
  }
}

// actualiza cada tipo de sprite
function updateSprite(sprite) {
  const type = sprite.id

  switch (type) {

    // caso jugador
    case SpriteID.PLAYER:
      // updatePlayer(sprite)
      break

    // caso pirata
    case SpriteID.SPIDER:
      // updatePirate(sprite)
      break

    // caso pirata
    case SpriteID.MONEY:
      // updateJoker(sprite)
      break

    // caso del enemigo
    default:
      break
  }
}