var p1Button = document.getElementById("p1");
var p2Button = document.getElementById("p2");

var p1Score = document.getElementById("span-p1");
var p2Score = document.getElementById("span-p2");
var inputValue = document.querySelector("input");
var defaultScore = 5;

var score = 0;
var gameOver = false;

p1Button.addEventListener("click", function(){
	score++;
		if(!gameOver){
			p1Score.textContent = score;
			if(score >= defaultScore){
				gameOver = true;
			}
		}
});

p2Button.addEventListener("click", function(){
	score++;
	p2Score.innerHTML = score;
});

inputValue.addEventListener("change", function(){
	defaultScore = inputValue.value;
});