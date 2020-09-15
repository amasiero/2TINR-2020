const stockTable = document.querySelector('#stocks');
stockTable.addEventListener('click', (event) => {
	const clicked = event.target.parentNode;

	if (clicked.dataset.type === 'delete') {
		const stockId = clicked.dataset.ref;

		fetch(`http://localhost:3000/stocks/${stockId}`, { method: 'DELETE' })
			.then((result) => {
				const tr = clicked.closest(`#stock_${stockId}`);
				tr.remove();
			})
			.catch((err) => console.error(err));
	}
});
