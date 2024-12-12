setInterval(() => {
	const newMessage = `
		<div id="messageDiv" class="container__message">
			<div class="wrap__message">
				<h1>허리 피자</h1>
			</div>
		</div>
	`;

	const div = document.createElement('div');
	div.innerHTML = newMessage;
	div.addEventListener('click', handleContentClick);
	document.body.appendChild(div);

	setTimeout(() => {
		messageDiv.remove();
	}, 120000);
}, 600000);

const handleContentClick = () => {
	const messageDiv = document.getElementById('messageDiv');
	messageDiv.remove();
};
