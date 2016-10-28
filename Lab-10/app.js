/*
lab 10
create a table of size at least 3x3 with randomly changing colors. 
Clicking on the individual square stops the colors from changing.
*/

function app(tableId){
	var _tds = document.querySelectorAll("#" + tableId + " td"),
			_active;

	var obj = {
		startColors: startColors,
		stopColors: stopColors
	};

	// I dont know if this is a good way to do this because it exposes variables
	// Nevermind the changeColor variable is private
	for(var i = 0; i < _tds.length; i++){
		_tds[i].addEventListener("click", function(){this.changeColor = !this.changeColor;});
	}

	function startColors(){
		_active = setInterval(changeColors, 300);
	}

	function stopColors(){
		clearInterval(_active);
	}

	function changeColors(){
		for(var i = 0; i < _tds.length; i++){
			if(!_tds[i].changeColor){_tds[i].style.backgroundColor = getRandomColor()};
		}
	}

	// Random hex from https://www.paulirish.com/2009/random-hex-color-code-snippets/
	function getRandomColor(){
		return '#' + Math.floor(Math.random() * 16777215).toString(16);
	}

	return obj;
}
