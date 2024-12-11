document.getElementById('undockButton').addEventListener('click', () => {
	// 현재 활성화된 창의 ID를 가져온 후 사이드바를 분리
	whale.windows.getCurrent((currentWindow) => {
		const parentWindowId = currentWindow.id;
		whale.sidebarAction.undock(parentWindowId, () => {
			console.log('사이드바가 분리되었습니다.');
		});
	});
});
