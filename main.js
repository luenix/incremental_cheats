export const draggable_div = {
	move : function(divid,xpos,ypos){
		divid.style.left = xpos + "px";
		divid.style.top = ypos + "px";
	},
	startMoving : function(divid,/*container,*/evt){
		evt = evt || window.event;
		var posX = evt.clientX,
			posY = evt.clientY,
		divTop = divid.style.top,
		divLeft = divid.style.left,
		eWi = parseInt(divid.offsetWidth),
		eHe = parseInt(divid.offsetHeight),
		// cWi = parseInt(document.getElementById(container).style.width),
		// cHe = parseInt(document.getElementById(container).style.height);
		// document.getElementById(container).style.cursor='move';
		// cWi = parseInt(document.body.style.width),
		// cHe = parseInt(document.body.style.height);
		cWi = parseInt(visualViewport.width),
		cHe = parseInt(visualViewport.height);
		divTop = divTop.replace("px","");
		divLeft = divLeft.replace("px","");
		var diffX = posX - divLeft,
			diffY = posY - divTop;
		document.onmousemove = function(evt){
			evt = evt || window.event;
			var posX = evt.clientX,
				posY = evt.clientY,
				aX = posX - diffX,
				aY = posY - diffY;
				if (aX < 0) aX = 0;
				if (aY < 0) aY = 0;
				if (aX + eWi > cWi) aX = cWi - eWi;
				if (aY + eHe > cHe) aY = cHe -eHe;
			draggable_div.move(divid,aX,aY);
		}
	},
	stopMoving : function(container){
		var a = document.createElement("script");
		// document.getElementById(container).style.cursor='default';
		document.onmousemove = function(){}
	},
}();

const uidivid = "cheat_ui_div";
(function() {
	if(document.getElementById(uidivid)) return;
	const div = document.createElement("div");
	div.id = uidivid;
	div.style = "border-width:3px;background-color:#cae8ca;border-style:solid;position:absolute;padding:7px;top:0;left:0;max-width:450px;z-index:999"
	div.onmousedown = function(event) { draggable_div.startMoving(this,event); };
	div.onmouseup = function(event) { draggable_div.stopMoving(); };
	document.body.appendChild(div);
})();

let tasks = [];

setInterval(()=>tasks.forEach(task => task()), 50);

export const libcheat = {
	addTask: (task, toggleable=false, label="") => {
		if(toggleable) {
			const div = document.getElementById(uidivid);
			const box = document.createElement("input");
			const text = document.createElement("span");
			text.innerText = label;
			box.setAttribute("type", "checkbox");
			div.appendChild(box);
			div.appendChild(text);
			div.appendChild(document.createElement("br"));
			const oldtask = task;
			task = () => {if(box.checked) oldtask()}
		}
		tasks.push(task)
	},
	clearTasks: () => tasks = [],
	addButton: (onClick, label) => {
		const div = document.getElementById(uidivid);
		const button = document.createElement("button");
		button.innerText = label;
		button.addEventListener("click", onClick);
		div.appendChild(button);
		div.appendChild(document.createElement("br"));
	},
}
