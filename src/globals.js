import { Game } from "./constants";

export default {
  // acceso a canvas y al context
  canvas: {},
  ctx: {},
  canvasUHD: {},
  ctxUHD: {},

  // estado del juego
  gameState: Game.INVALID,

  // estado de ciclo anterior (milisegundos)
  previousCycleMilliseconds: -1,

  // tiempo de ciclo de juego real (seconds)
  deltaTime: 0,

  // tiempo de ciclo objetivo (seconds, constante)
  frameTimeObj: 0,

  // objeto que guarda los datos de imagen (tileSet)
  tileSets: [
    "\u{1F474}",
    "\u{1F577}",
    "\u{1F4B5}",
    "\u{1F49A}",
    "\u2B1C",
  ],
} 