$(document).ready(function () {
	var main = document.getElementById('main');
	var one = document.getElementById('one');
	var two = document.getElementById('two');
	var three = document.getElementById('three');
	var four = document.getElementById('four');
	var five = document.getElementById('five');
	var ones = [];
	var twos = [];
	var threes = [];
	var fours = [];
	var fives = [];

	function line() {
		var line = document.createElement('div');
		line.className = 'line';
		return line;
	}
	function red(line,i) {
		line.style.background = "rgba(242,56,90," + i / 255 + ")";
		return line;
	}
	function orange(line,i) {
		line.style.background = "rgba(245,165,3," + i / 255 + ")";
		return line;
	}
	function cream(line,i) {
		line.style.background = "rgba(233,241,223," + i / 255 + ")";
		return line;
	}
	function cyan(line,i) {
		line.style.background = "rgba(74,217,217," + i / 255 + ")";
		return line;
	}

	function blue(line,i) {
		line.style.background = "rgba(54,177,191," + i / 255 + ")";
		return line;
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
		one.innerHTML = '';
		two.innerHTML = '';
		three.innerHTML = '';
		four.innerHTML = '';
		five.innerHTML = '';
	}

	function randChar() {
		return String.fromCharCode(3e4+Math.random()*33);
	}

	function printLines() {
		clearScreen();
		for (var i = 0; i < 255; i++) {
			one.appendChild(ones[i]);
			two.appendChild(twos[i]);
			three.appendChild(threes[i]);
			four.appendChild(fours[i]);
			five.appendChild(fives[i]);
		}

		var counter = document.createElement('p');
		counter.innerText = randChar();
		one.appendChild(counter);
		var counter = document.createElement('p');
		counter.innerText = randChar();
		two.appendChild(counter);
		var counter = document.createElement('p');
		counter.innerText = randChar();
		three.appendChild(counter);
		var counter = document.createElement('p');
		counter.innerText = randChar();
		four.appendChild(counter);
		var counter = document.createElement('p');
		counter.innerText = randChar();
		five.appendChild(counter);
	}

	function shiftLines(lines,times) {
		for (var i = 0; i < times; i++) {
			t = lines.shift();
			lines.push(t);
		}
	}

	initColumns();

	document.body.onkeyup = function(e) {
		clearInterval(getWavey);
		document.getElementsByTagName('header')[0].innerText = '';
		document.getElementsByTagName('h2')[0].innerText = 'do it again';
		var multiplier = Math.random() * 10;
		if(e.keyCode == 13) {
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
		},20);
	}
});