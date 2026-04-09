const tabs = document.querySelectorAll('.tabs');

tabs.forEach(function (tabs) {
	let arrTabs = Array.from(tabs.querySelectorAll(".tab")),
		arrInfo = Array.from(tabs.querySelectorAll(".tab__content"));

	tabs.querySelectorAll('.tab').forEach(el => el.addEventListener('click', function (event) {
		let i = arrTabs.indexOf(el, 0);
		tabs.querySelector(".tab__content_active").classList.remove("tab__content_active");
		arrInfo[i].classList.toggle("tab__content_active");
		tabs.querySelector(".tab_active").classList.remove("tab_active");
		arrTabs[i].classList.toggle("tab_active");
		event.preventDefault()
	}));
});