function Field(width, height) {
  this.field = new Array(width);
  for (var i = 0; i < this.field.length; i++) {
    this.field[i] = new Array(height);
    for (var j = 0; j < this.field[i].length; j++) {
      this.field[i][j] = 0;
    }
  }

  person = new Person('Vasia');


};

Field.prototype.renderField = function (separator) {
  separator = separator || '-';
  var resSep = '';
  for (var i = 0; i < this.field.length; i++) {
    for (var j = 0; j < this.field[i].length; j++) {
      document.write(this.field[i][j] + ' ');
    }
    document.write('<br />');
  }
  for (var i = 0; i < this.field[0].length; i++) {
    resSep += separator;
  }
  document.write(resSep);
  document.write('<br />');

};
Field.prototype.clearField = function () {

};
Field.prototype.changeSize = function (newX, newY) {
  this.field = new Array(newX);
  for (var i = 0; i < this.field.length; i++) {
    this.field[i] = new Array(newY);
    for (var j = 0; j < this.field[i].length; j++) {
      this.field[i][j] = 0;
    }
  }
};

function Person(name, XPosition, YPosition) {
  this.XPosition = (XPosition == undefined) ? 5 : XPosition;
  this.YPosition = (YPosition == undefined) ? 5 : YPosition;
}


Person.prototype.start = function (XPosition, YPosition) {
    this.field[XPosition][YPosition] = 1;
}

Person.prototype.go = function (direction, step) {

}
a=new Field()
b=new Person()
a.renderField()
b.start();
b.go('left', 2);
b.go('top', 1);
a.renderField();