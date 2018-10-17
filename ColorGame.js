var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message")
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

function setupSquares(){
	for(var i = 0; i < squares.length; i++){
	// Add click listeners
		squares[i].addEventListener("click", function(){
			// Grab color of clicked square
			var clickedColor = this.style["background-color"];

			// Compare it with picked color
			if(clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct!";
				changeColors(clickedColor);
				h1.style["background-color"] = clickedColor;
				resetButton.textContent = "Play Again?"
			} else {
				this.style["background-color"] = "#232323";
				messageDisplay.textContent = "Try again!";
			}
		});
	}
}

function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		})
	}
}

function reset(){
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picled color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style["background-color"] = colors[i];
		} else {
			squares[i].style.display = "none";
		}

	}
	h1.style["background-color"] = "steelblue";
}

resetButton.addEventListener("click", function(){
	reset();
})

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	// Add click listeners
	squares[i].addEventListener("click", function(){
		// Grab color of clicked square
		var clickedColor = this.style["background-color"];

		// Compare it with picked color
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
			h1.style["background-color"] = clickedColor;
			resetButton.textContent = "Play Again?"
		} else {
			this.style["background-color"] = "#232323";
			messageDisplay.textContent = "Try again!";
		}
	});
}

function changeColors(color){
	// Loop through all squares
	for(var i = 0; i < colors.length; i++){
		// Change each color to match given color
		squares[i].style["background-color"] = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make na array
	var array = [];
	//repeat num times
	for(var i = 0; i < num; i++){
	//get random color and push into array
		array.push(randomColor());
	}

	//return that array
	return array;
}

function randomColor(){
	//pick a red from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a green from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a blue from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b +")";
}