import { Game } from "./constants.js"

export default {
  // acceso a canvas y al context
  canvas: {},
  ctx: {},

  // estado del juego
  gameState: Game.INVALID,

  // estado de ciclo anterior (milisegundos)
  previousCycleMilliseconds: -1,

  // tiempo de ciclo de juego real (seconds)
  deltaTime: 0,

  // tiempo de ciclo objetivo (seconds, constante)
  frameTimeObj: 0,

  // array que guarda la lista de elementos a cargar
  assetsToLoad: [],

  // variable que indica el número de elementos cargados
  assetsLoaded: 0,

  // objeto que guarda los datos de imagen (tileSet)
  tileSets: [
    "",
    "\u2B1C",
  ],

  textBlocks: [
    "\u2B1C",
    "",
  ],

  // objeto que guarda los datos de los sprites
  sprites: [
    "\u{1F474}",
    "\u{1F577}",
    "\u{1F4B5}",
    "\u{1F49A}",
  ],

  textCharacters: [
    "\u{1F474}",
    "\u{1F577}",
    "\u{1F4B5}",
    "\u{1F49A}",
  ],

  cycleRealTime: 0,

  // datos de nivel
  level: {},

  // tiempo de juego
  gameTime: -1,

  // temporización nivel
  levelTime: {},

  // objeto que guarda el estado de la tecla pulsada
  action: {},

  // life
  life: 0,
} 