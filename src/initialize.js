import globals from "./globals.js"
import { Game, FPS, SpriteID, State, } from "./constants.js"
import ImageSet from "./ImageSet.js"
import Frames from "./Frames.js"
import { Level, level1 } from "./Level.js"
import Timer from "./Timer.js"
import Physics from "./Physics.js"
import { keyupHandler, keydownHandler } from "./events.js"
import HitBox from "./HitBox.js"
import { Sprite } from "./Sprite.js"


// funcionque inicializa los elementos HTML
function initHTMLElements() {

  // canvas y context Screen
  globals.canvas = document.getElementById('gameScreen')
  globals.ctx = globals.canvas.getContext('2d')

  // eliminación del Anti-Aliasing
  globals.ctx.imageSmoothingEnabled = false

}

// funcion que inicializa las variables del juego
function initVars() {

  // inicializar las variables de gestión de tiempo
  globals.previousCycleMilliseconds = 0
  globals.deltaTime = 0
  globals.frameTimeObj = 1 / FPS // frame time in seconds

  // inicializar el estado del juego
  // globals.gameState = Game.LOADING

  // iniciar el contador del juego
  globals.gameTime = 0

  // iniciar el estado de las acciones
  globals.action = {
    moveLeft: false,
    moveRight: false,
    moveUp: false,
    moveDown: false,
  }

  // variable de vida de player
  globals.life = 400

  globals.gameState = Game.PLAYING
}

// funcion que se llama cada vez que se carga un archivo
function loadAssets() {
  globals.assetsToLoad = globals.sprites

  globals.assetsLoaded++

  // una vez se han cargado todos los activos pasar
  if (globals.assetsLoaded === globals.assetsToLoad.length) {

    for (let i = 0; i < globals.tileSets.length; i++) {
      // remove the load event listener
      globals.tileSets[i].removeEventListener("load", loadHandler, false)
    }

    console.log("Assets finish loading")

    // start the game
    globals.gameState = Game.PLAYING
  }
}

function initTimers() {
  // creamos timer de valor 200, con cambios cada 0.5 segundos
  globals.levelTime = new Timer(200, 0.5)
}

function initSprites() {

  // initWall()
  // initPlayer()
  // initSpider()
  // initMoney()
  // initLife()
}

function initEvents() {
  // add the keyboard event listeners
  window.addEventListener("keydown", keydownHandler, false)
  window.addEventListener("keyup", keyupHandler, false)
}

function initPlayer() {
  // crear las propiedades de las imagenes: initFil, initCol, xSize, ySize, gridSize, xOffset, yOffset
  const imageSet = new ImageSet(0, 0, 44, 57, 64, 10, 6)

  // crear los datos de la animación. 8 frames / state
  const frames = new Frames(8, 5)

  // crear nuestro objeto physics con vLimit 40 pixels por segundo
  const physics = new Physics(40)

  // crear objeto hitbox
  const hitBox = new HitBox(16, 51, 14, 5)

  // crear nuestro sprite
  const player = new Sprite(SpriteID.PLAYER, State.STILL_RIGHT, 100, 70, imageSet, frames, physics, hitBox)

  // añadir el player al array de sprites
  globals.sprites.push(player)
}

function initJoker() {
  // crear las propiedades de las imagenes: initFil, initCol, xSize, ySize, gridSize, xOffset, yOffset
  // const imageSet = new ImageSet(8, 0, 44, 57, 64, 10, 6)

  // crear los datos de la animación. 8 frames / state
  const frames = new Frames(3)

  // crear nuestro sprite
  const joker = new Sprite(SpriteID.JOKER, State.STILL, 100, 70, imageSet, frames)

  // añadir el player al array de sprites
  globals.sprites.push(joker)
}

function initPirate() {
  // crear las propiedades de las imagener
  const imageSet = new ImageSet(9, 0, 32, 47, 64, 17, 16)

  // crear los datos de la animación. 8 frames / state
  const frames = new Frames(8, 5)

  // crear objeto physics con el vLimit = 40 pixels second
  const physics = new Physics(40)

  // creamos objeto hitbox
  const hitBox = new HitBox(13, 46, 8, 0)

  const initTimeToChangeDirection = Math.floor(Math.random() * 3) + 1

  // crear nuestro sprite
  // const pirate = new Pirate(SpriteID.PIRATE, State.RIGHT_2, 100, 100, imageSet, frames, physics, initTimeToChangeDirection, hitBox)

  // añadir el pirate al array de sprites
  globals.sprites.push(pirate)
}

function initLevel() {
  // crear las propiedades de las imagenes
  const imageSet = new ImageSet(
    /* initFil */ 0,
    /* initCol */ 0,
    /* xSize */ 16,
    /* ySize */ 16,
    /* gridSize */ 16,
    /* xOffset */ 0,
    /* yOffset */ 0
  )

  // creamos y guardamos nuestro nivel
  globals.level = new Level(level1, imageSet)
}

// exportar funciones
export {
  initHTMLElements,
  initVars,
  loadAssets,
  initSprites,
  initLevel,
  initTimers,
  initEvents,
}