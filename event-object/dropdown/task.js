const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(function (dropdown) {
	let dropdownValue = dropdown.querySelector('.dropdown__value'),
		dropdownItems = dropdown.querySelectorAll('.dropdown__item'),
		dropdownList = dropdown.querySelector('.dropdown__list');

	dropdownValue.addEventListener('click', () => {
		dropdownList.classList.toggle('dropdown__list_active');
	});

	dropdownItems.forEach(el => el.addEventListener('click', function (event) {
		dropdownValue.textContent = el.textContent;
		dropdownList.classList.toggle('dropdown__list_active');
		event.preventDefault()
	}));
});