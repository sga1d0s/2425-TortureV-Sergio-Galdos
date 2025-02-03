
// id de bloque del mapa
export const Block = {
  EMPTY: 0,
  SOLID: 1,
}

// estados del juego
export const Game = {
  INVALID: -1,
  LOADING: 0,
  PLAYING: 1,
  OVER: 2,
}

// identificador de tipo de Sprite (ID)
export const SpriteID = {
  PLAYER: 0,
  SPIDER: 1,
  MONEY: 2,
  LIFES: 3,
  WALL: 4,
  SCORE: 5,
}

// velocidad del juevo
export const FPS = 30

// identificador de estado de sprite (dirección)
export const State = {
  // estados PLAYER
  UP: 0,
  LEFT: 1,
  DOWN: 2,
  RIGHT: 3,
}

// diferentes TileSets
export const Tile = {
  SIZE_16: 0,
}

// identificador de cada tecla
export const Key = {
  UP: 38,
  DOWN: 40,
  RIGHT: 39,
  LEFT: 37,
}