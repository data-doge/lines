var loadInterval;

$(document).ready(function () {
  var deg = 0;
  loadInterval = setInterval(function () {
    $('#load img').css({
      transform: 'rotateY(' + deg % 360 + 'deg)'
    });
    deg += 5;
  }, 20);
});

$(window).load(function () {

  clearInterval(loadInterval);
  $('#load').remove();
  $('#front-page').fadeIn(3000);
  var ocean = new Ocean();

  $(document).on('keyup', function (e) {
    if (e.keyCode === 13) {
      if (!ocean.initialized) {
        ocean.initializeWaves();
        ocean.initializeChars();
      }
      ocean.resetRotation();
    }
  });

});