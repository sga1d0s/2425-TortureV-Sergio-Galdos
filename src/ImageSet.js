// clase que gestiona el titleSet de un sprite
export default class ImageSet {
  constructor(
    image,
    xSize, 
    ySize, 
    gridSize, 
    xOffset, 
    yOffset
  ) {
    this.image = image
    this.xSize = xSize
    this.ySize = ySize
    this.gridSize = gridSize
    this.xOffset = xOffset
    this.yOffset = yOffset
  }
}