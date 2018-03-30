function addListItem() {
	var input = document.getElementById('input');
	var text = input.value;
	if (text !== '' && text.charAt(0) !== ' ') {
		var li = document.createElement('li');
		li.innerHTML = '<input type="checkbox" onclick="checkListItem()"></input><p>' + text + '</p><button onclick="deleteListItem()">X</button>';
		document.getElementById('todolist').appendChild(li);
	};
	input.value = '';
};
function deleteListItem() {
	var toRemove = event.target.parentNode;
	toRemove.parentNode.removeChild(toRemove);
};
function checkListItem() {
	var toCheck = event.target.nextSibling;
	var checkText = toCheck.innerHTML;
	if (!(checkText.startsWith('<strike>'))) {
		toCheck.innerHTML = checkText.strike();
	} else {
		toCheck.innerHTML = checkText.slice(8, -9);
	};
};