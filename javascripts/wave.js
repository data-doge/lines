function Wave (r,g,b) {
  this.lines = [];
  this.$element = $("<div class='wave'></div>");
  this.r = r;
  this.g = g;
  this.b = b;
  this.interval;
}

Wave.prototype.initializeLines = function () {
  for (var i = 0; i < 256; i++) {
    this.lines.push(rgbLine(this.r, this.g, this.b, i));
  }
};

Wave.prototype.renderLines = function () {
  $('#main').append(this.$element);
  for (var i = 0; i < this.lines.length; i++) {
    this.$element.append(this.lines[i]);
  }
};

Wave.prototype.rotateLinesBy = function (amount) {
  for (var i = 0; i < amount; i++) {
    var $line = this.$element.children().first().remove();
    this.$element.append($line);
  }
};

Wave.prototype.rotate = function () {
  clearInterval(this.interval);
  var speed = Math.floor(Math.random() * 15) + 1;
  var that = this;
  this.interval = setInterval(function () {
    that.rotateLinesBy(speed);
  }, 20);
};