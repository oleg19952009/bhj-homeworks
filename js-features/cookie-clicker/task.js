'use strict';
let counter = document.getElementById('clicker__counter');
let cookie = document.getElementById('cookie');
let sumClick = 0;

function cliker() {
	cookie.width = cookie.width == 200 ? 250 : 200;
	counter.textContent = ++sumClick;
}

cookie.onclick = cliker;