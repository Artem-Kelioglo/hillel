class Field {
  constructor(width = 10, height = 10) {
    this.field = []
    for (let i = 0; i < width; i++) {
      this.field[i] = []
      for (let j = 0; j < height; j++) {
        this.field[i][j] = 0
      }
    }
  }

  renderFieled() {
    let str = ''
    for (let i = 0; i < this.field.length; i++) {
      str = str + this.field[i].join(' ') + '<br>'
    }
    document.write(`<hr/> ${str} <hr/>`)
  }
  clearField() {
    // console.log(this.field.indexOf(1) )//?????
  }
  changesSize(newX = 10, newY = 10) {
    console.log(this.field)
    this.field = []
    for (let i = 0; i < newX; i++) {
      this.field[i] = []
      for (let j = 0; j < newY; j++) {
        this.field[i][j] = 0
      }
    }

  }
}
class Person extends Field {
  constructor(width, height) {
    super(width, height)

  }
  start(XPosition, YPosition) {
    this.field[XPosition][YPosition] = 1
    this.aa = XPosition
    this.bbbb = YPosition
    this.renderFieled()
  }
  go(direction, step) {

    switch (direction) {
      case 'left':
        this.field[this.aa][this.bbbb] = 0
        this.start(this.aa, this.bbbb - step);
        this.renderFieled()
        break;
      case 'right':
        this.field[this.aa][this.bbbb] = 0
        this.start(this.aa, this.bbbb + step);
        this.renderFieled()
        break;
      case 'top':
        this.field[this.aa][this.bbbb] = 0
        this.start(this.aa - step, this.bbbb);
        this.renderFieled()
        break;
      case 'bottom':
        this.field[this.aa][this.bbbb] = 0
        this.start(this.aa + step, this.bbbb);
        this.renderFieled()
        break;
    }


  }
  resetPosition() {

  }

}
p = new Person(5, 7)
// console.log(p)
p.renderFieled()
// console.log(p)
p.start(4, 4)
// p.renderFieled()
// console.log(p)
// p.go('left', 2)
// p.go('left', 2)
p.go('top', 3)
p.go('top', 1)
// p.renderFieled()
// p.clearField()
// p.renderFieled()
p.start(4, 4)
// p.renderFieled()
// p.changesSize(7, 3)
// p.renderFieled()
// p.changesSize()
// p.renderFieled()
console.log(p)