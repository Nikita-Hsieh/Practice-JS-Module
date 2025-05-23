document.querySelectorAll('.item').forEach((item) => {
	item.addEventListener('click', () => {
		document
			.querySelectorAll('.item')
			.forEach((i) => i.classList.remove('active'))

		item.classList.add('active')
	})
})
