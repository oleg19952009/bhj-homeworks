let arrTabs = Array.from(document.querySelectorAll(".tab")),
	arrInfo = Array.from(document.querySelectorAll(".tab__content"));

document.querySelectorAll('.tab').forEach(el => el.addEventListener('click', function (event) {
	let i = arrTabs.indexOf(el, 0);
	document.querySelector(".tab__content_active").classList.remove("tab__content_active");
	arrInfo[i].classList.toggle("tab__content_active");
	document.querySelector(".tab_active").classList.remove("tab_active");
	arrTabs[i].classList.toggle("tab_active");
	event.preventDefault()
}));
