setInterval(() => {
	const newMessage = `
		<div class="wrap__message">
			허리 피자
		</div>
	`;

	const div = document.createElement('div');
	div.classList.add('container__message--side-pizza');
	div.innerHTML = newMessage;
	div.addEventListener('click', () => {
		div.remove();
	});
	document.body.appendChild(div);

	setTimeout(() => {
		messageDiv.remove();
	}, 120000);
	// }, 2000);
}, 600000);
