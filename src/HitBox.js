// clase que gestiona el hitbox de un sprite
export default class HitBox {
  constructor(
    xSize, 
    ySize, 
    xOffset, 
    yOffset
  ) {
    // tamaño en pixeles del hitbox (X)
    this.xSize = xSize
    // tamaño en pixeles del hitbox (Y)
    this.ySize = ySize
    // offset en x de comienzo del dibujo del hitbox respecto de xPos
    this.xOffset = xOffset
    // offset en y de comienzo del dibujo del hitbox respecto de yPos
    this.yOffset = yOffset 
  }
}