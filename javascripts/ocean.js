function Ocean () {
  this.colors = [
    {r: 242, g: 56, b: 90},
    {r: 245, g: 165, b: 3},
    {r: 233, g: 241, b: 223},
    {r: 74, g: 217, b: 217},
    {r: 54, g: 177, b: 191}
  ];
  this.initialized = false;
  this.waves = []
}

Ocean.prototype.initializeWaves = function () {
  $('#front-page').hide();
  $('section').show();
  $('footer').show();
  for (var i = 0; i < this.colors.length; i++) {
    this.initialized = true;
    var wave = new Wave(this.colors[i].r, this.colors[i].g, this.colors[i].b)
    wave.initializeLines();
    wave.renderLines();
    this.waves.push(wave);
  }
};

Ocean.prototype.resetRotation = function () {
  for (var i = 0; i < this.waves.length; i++) {
    this.waves[i].rotate();
  }
};

Ocean.prototype.initializeChars = function () {
  for (var i = 0; i < this.waves.length; i++) {
    $('#characters').append("<div class='character'></div>");
  }
  var charInterval = setInterval(function () {
    $('.character').each(function (i, character) {
      $(character).text(randChar());
    });
  }, 20);
};