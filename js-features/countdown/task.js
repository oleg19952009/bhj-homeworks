'use strict';
let element = document.getElementById('timer');
let startTimer = element.textContent;

function changeTimer() {
	if (startTimer == 0) {
		clearInterval(interval);
		alert('Вы победили в конкурсе!');
	}
	element.textContent = startTimer;
	startTimer--;
}

let interval = setInterval(changeTimer, 1000);