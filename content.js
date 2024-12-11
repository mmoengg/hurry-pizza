setInterval(() => {
	const messageDiv = document.createElement('div');
	messageDiv.innerText = '테스뜨';
	messageDiv.style.position = 'fixed';
	messageDiv.style.color = 'red';
	messageDiv.style.width = '300px';
	messageDiv.style.height = '300px';
	messageDiv.style.fontSize = '24px';
	messageDiv.style.top = '10px';
	messageDiv.style.right = '10px';
	messageDiv.style.backgroundColor = 'rgba(255, 255, 255, 1)';
	messageDiv.style.border = '1px solid #000';
	messageDiv.style.padding = '10px';
	messageDiv.style.zIndex = '9999'; // 다른 요소들 위에 표시되도록

	document.body.appendChild(messageDiv);

	// 3초 후에 메시지를 제거
	setTimeout(() => {
		messageDiv.remove();
	}, 1500);
}, 2000);
