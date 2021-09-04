var squareNumber = 6;
var colors = generateRandomColors(squareNumber);
var square = document.querySelectorAll(".square");
var selectedColor = randomColorSelector(colors);
var colorDisplay = document.querySelector("#colorDisplay");
colorDisplay.textContent = selectedColor;
var resultDisplay = document.querySelector("#resultDisplay");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard"); 

easyButton.addEventListener("click",function(){
	squareNumber = 3;
	colors = generateRandomColors(squareNumber);
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	selectedColor = randomColorSelector(colors);
	colorDisplay.textContent = selectedColor;
	for(var i = 0; i < square.length; i++){
		if(colors[i]){
			square[i].style.backgroundColor = colors[i];
		}
		else{
			square[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
	hardButton.style.backgroundColor = "white";
	hardButton.style.color = "steelblue";
	easyButton.style.backgroundColor = "steelblue";
	easyButton.style.color = "white";
	/////
	resultDisplay.textContent = "";
	resetButton.textContent = "New Colors";
});

hardButton.addEventListener("click",function(){
	squareNumber = 6;
	colors = generateRandomColors(squareNumber);
	easyButton.classList.remove("selected");
	hardButton.classList.add("selected");
	selectedColor = randomColorSelector(colors);
	colorDisplay.textContent = selectedColor;
	for(var i = 0; i < square.length; i++){
		square[i].style.backgroundColor = colors[i];	
		square[i].style.display = "block";
	}
	h1.style.backgroundColor = "steelblue";
	easyButton.style.backgroundColor = "white";
	easyButton.style.color = "steelblue";
	hardButton.style.backgroundColor = "steelblue";
	hardButton.style.color = "white";
	/////
	resultDisplay.textContent = "";
	resetButton.textContent = "New Colors";
});

resetButton.addEventListener("click",function(){
	colors = generateRandomColors(squareNumber);
	for(var i = 0; i < colors.length; i++){
		square[i].style.backgroundColor = colors[i];
	}
	selectedColor = randomColorSelector(colors);
	colorDisplay.textContent = selectedColor;
	h1.style.backgroundColor = "steelblue";
	if(squareNumber === 3){
		easyButton.style.backgroundColor = "steelblue";
	}
	else{
		hardButton.style.backgroundColor = "steelblue";
	}
	this.textContent = "New Colors";
	resultDisplay.textContent = "";

});

for(var i = 0; i < colors.length; i++){
	square[i].style.backgroundColor = colors[i];
	square[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;

		if(clickedColor === selectedColor){
			resultDisplay.textContent = "correct!";
			resetSquareColor(colors);
			h1.style.backgroundColor = selectedColor;
			resetButton.textContent = "PLAY AGAIN?";
			if(squareNumber === 3){
				easyButton.style.backgroundColor = selectedColor;
			}
			else{
				hardButton.style.backgroundColor = selectedColor;
			}
		}
		else{
			resultDisplay.textContent = "Try again!";
			this.style.backgroundColor = "#232323";
		}
	});
}

//Reset square colors when click on correct color
function resetSquareColor(colors){
	for(var i = 0; i < colors.length; i++){
		square[i].style.backgroundColor = selectedColor;
	}
}

//Select a random color
function randomColorSelector(colors){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

//Generate random rgb color codes using randomColorMixer()
function generateRandomColors(size){
	var randomColors = [];
	for(var i =0; i < size; i++){
		randomColors[i] = randomColorMixer();
	}
	return randomColors;
}

function randomColorMixer(){
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	return "rgb(" + red + ", " + green + ", " + blue + ")";
}