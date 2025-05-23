const container = document.querySelector('.container')
let currentTransaction = null

container.addEventListener('click', (e) => {
	const transaction = e.target.closest('.transaction')
	const closeBtn = e.target.closest('.close-btn')

	if (closeBtn) {
		const expandedTransaction = document.querySelector('.transaction.expanded')
		const otherTransaction = [
			...document.querySelectorAll('.transaction'),
		].filter((t) => t !== expandedTransaction)

		otherTransaction.forEach((t) => t.classList.remove('not-expanded'))

		if (expandedTransaction) {
			document.startViewTransition(() => {
				expandedTransaction.classList.remove('expanded')
			})
		}

		return
	} else if (transaction) {
		if (!transaction.classList.contains('expanded')) {
			const expandedTransaction = document.querySelector(
				'.transaction.expanded'
			)
			const otherTransaction = [
				...document.querySelectorAll('.transaction'),
			].filter((t) => t !== transaction)

			if (expandedTransaction) {
				document.startViewTransition(() => {
					expandedTransaction.classList.remove('expanded')
				})
			}

			document.startViewTransition(() => {
				transaction.classList.add('expanded')
				otherTransaction.forEach((t) => t.classList.add('not-expanded'))
			})
		}
	}
})
