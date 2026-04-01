'use strict';
const rotatorCase = document.querySelectorAll('.rotator__case');
let i = 0;

function rotatorActiv() {
	if (i == rotatorCase.length) {
		i = 0;
	}

	document.querySelector('.rotator__case_active').classList.remove('rotator__case_active');
	rotatorCase[i].classList.add('rotator__case_active');
	i++;
}

let interval = setInterval(rotatorActiv, 1000);