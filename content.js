setInterval(() => {
	const newMessage = `
		<div id="messageDiv" class="container__message">
			<div class="wrap__message">
				허리 피자
			</div>
		</div>
	`;

	const div = document.createElement('div');
	div.innerHTML = newMessage;
	div.addEventListener('click', () => {
		div.remove(); // div를 클릭하면 div를 제거
	});
	document.body.appendChild(div);

	setTimeout(() => {
		messageDiv.remove();
	}, 120000);
}, 600000);
