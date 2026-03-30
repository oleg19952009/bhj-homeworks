'use strict';
let getHole = index => document.getElementById(`hole${index}`),
	elementDead = document.getElementById('dead'),
	elementLost = document.getElementById('lost'),
	sumDead = 0, sumLost = 0;

function checkHole(element) {
	if (element.className.includes('hole_has-mole')) {
		sumDead += 1;
	} else {
		sumLost += 1;
	}

	if (sumDead == 10) {
		alert('Ура! Вы победили');
		sumDead = 0;
		sumLost = 0;
	}

	if (sumLost == 5) {
		alert('Увы! Вы проиграли');
		sumDead = 0;
		sumLost = 0;
	}

	elementDead.textContent = sumDead;
	elementLost.textContent = sumLost;
}

for (let i = 1; i <= 9; i++) {
	let element = getHole(i);
	element.onclick = () => { checkHole(element) };
}