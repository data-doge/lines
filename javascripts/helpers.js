function randChar() {
  return String.fromCharCode(3e4+Math.random()*33);
}

function rgbLine (r, g, b, opacity) {
  return $("<div class='line'></div>").css({
    backgroundColor : 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 255 + ')'
  });
}