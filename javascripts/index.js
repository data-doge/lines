$(document).ready(function () {
	var $main = $('#main');
	var $one = $('#one');
	var $two = $('#two');
	var $three = $('#three');
	var $four = $('#four');
	var $five = $('#five');
	var ones = [];
	var twos = [];
	var threes = [];
	var fours = [];
	var fives = [];

	function line() {
		var $line = $("<div class='line'></div>");
		return $line;
	}
	function red($line,i) {
		$line.css({
			backgroundColor : "rgba(242,56,90," + i / 255 + ")"
		});
		return $line;
	}
	function orange($line,i) {
		$line.css({
			backgroundColor : "rgba(245,165,3," + i / 255 + ")"
		});
		return $line;
	}
	function cream($line,i) {
		$line.css({
			backgroundColor : "rgba(233,241,223," + i / 255 + ")"
		});
		return $line;
	}
	function cyan($line,i) {
		$line.css({
			backgroundColor : "rgba(74,217,217," + i / 255 + ")"
		});
		return $line;
	}

	function blue($line,i) {
		$line.css({
			backgroundColor : "rgba(54,177,191," + i / 255 + ")"
		});
		return $line;
	}

	function initColumns() {
		for (var i = 0; i < 255; i++) {
			ones.push(red(line(),i));
			twos.push(orange(line(),i));
			threes.push(cream(line(),i));
			fours.push(cyan(line(),i));
			fives.push(blue(line(),i));
		}
	}

	function clearScreen() {
		$one.html('');
		$two.html('');
		$three.html('');
		$four.html('');
		$five.html('');
	}

	function randChar() {
		return String.fromCharCode(3e4+Math.random()*33);
	}

	function printLines() {
		clearScreen();
		for (var i = 0; i < 255; i++) {
			$one.append(ones[i]);
			$two.append(twos[i]);
			$three.append(threes[i]);
			$four.append(fours[i]);
			$five.append(fives[i]);
		}
		var $counter = $('<p></p>');
		$counter.text(randChar());
		$one.append($counter);
		var $counter = $('<p></p>');
		$counter.text(randChar());
		$two.append($counter);
		var $counter = $('<p></p>');
		$counter.text(randChar());
		$three.append($counter);
		var $counter = $('<p></p>');
		$counter.text(randChar());
		$four.append($counter);
		var $counter = $('<p></p>');
		$counter.text(randChar());
		$five.append($counter);
	}

	function shiftLines(lines,times) {
		for (var i = 0; i < times; i++) {
			t = lines.shift();
			lines.push(t);
		}
	}

	initColumns();

	$(document).on('keyup', function (e) {
		clearInterval(getWavey);
		$('header').text('');
		$('h2').text('do it again');
		var multiplier = Math.random() * 10;
		if(e.keyCode === 13) {
			oneStep = Math.ceil((Math.random() * multiplier));
			twoStep = Math.ceil((Math.random() * multiplier));
			threeStep = Math.ceil((Math.random() * multiplier));
			fourStep = Math.ceil((Math.random() * multiplier));
			fiveStep = Math.ceil((Math.random() * multiplier));
		}
		var getWavey = setInterval(function() {
			printLines();
			shiftLines(ones,oneStep);
			shiftLines(twos,twoStep);
			shiftLines(threes,threeStep);
			shiftLines(fours,fourStep);
			shiftLines(fives,fiveStep);
		},100);
	});

});