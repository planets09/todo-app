
function clear(evt){
	var element = evt.srcElement.parentElement;
	element.parentNode.removeChild(element);
}


function strike(evt){
	console.log(evt);
	var element = evt.target,
	x = document.createElement('SPAN');
	console.log(element);
	element.onclick = "";
	element.style.textDecoration = "line-through";
	x.classList.add('glyphicon');
	x.classList.add('glyphicon-remove-sign');
	x.classList.add('pull-right');
	x.onclick = clear;
	element.appendChild(x);
}

function todoList(){
	var info = document.getElementById('userData').value;
	// console.log(info);

	var timeDate = document.getElementById('date').innerHTML = Date();
	// console.log(timeDate);

	var newLi = document.createElement('LI');
	// console.log(newLi);

	newLi.onclick = strike;

	var newMsg = document.createTextNode(info);

	newLi.appendChild(newMsg);
	// console.log(newLi);

	var list = document.getElementById('display-list');
	list.appendChild(newLi);
}
