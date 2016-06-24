var ScrW = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
var ScrH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)

var demonPoints = 0
var mostDemonPoints = 666
var press = function() {
	demonPoints++;
	document.getElementById('score').innerHTML = "Your score: " + demonPoints + " points";
	if (demonPoints > mostDemonPoints) {
		document.getElementById('highscore').innerHTML = "New high score: " + demonPoints + " points";
	}
}