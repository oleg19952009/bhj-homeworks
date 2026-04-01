book = document.querySelector('.book')
document.querySelectorAll('.font-size').forEach(el => el.addEventListener('click', function (event) {
	const size = el.dataset.size;

	document.querySelector('.font-size_active').classList.remove('font-size_active');
	el.classList.add('font-size_active');
	book.classList.remove('font-size_big');
	book.classList.remove('font-size_small');

	if (size == 'small') {
		book.classList.add('font-size_small');
	} else if (size == 'big') {
		book.classList.add('font-size_big');
	}

	event.preventDefault()
}));