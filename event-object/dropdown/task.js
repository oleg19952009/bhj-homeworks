let dropdownValue = document.querySelector('.dropdown__value'),
	dropdownList = document.querySelector('.dropdown__list');

dropdownValue.addEventListener('click', () => {
	dropdownList.classList.toggle('dropdown__list_active');
});

document.querySelectorAll('.dropdown__item').forEach(el => el.addEventListener('click', function (event) {
	dropdownValue.textContent = el.textContent;
	dropdownList.classList.toggle('dropdown__list_active');
	event.preventDefault()
}));
