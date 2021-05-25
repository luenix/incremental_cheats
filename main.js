const uidivid = 'cheat_ui_div';
(function() {
	if(document.getElementById(uidivid)) return;
	const div = document.createElement('div');
	div.id = uidivid;
	div.style="border-width:3px;background-color:#cae8ca;border-style:solid;position:fixed;padding:7px;bottom:0;right:0;max-width:450px;z-index:999"
	document.body.appendChild(div);
})();

let tasks = [];

setInterval(()=>tasks.forEach(task => task()), 50);

export const libcheat = {
	addTask: (task, toggleable=false, label="") => {
		if(toggleable) {
			const div = document.getElementById(uidivid);
			const box = document.createElement('input');
			const text = document.createElement('span');
			text.innerText = label;
			box.setAttribute("type", "checkbox");
			div.appendChild(box);
			div.appendChild(text);
			div.appendChild(document.createElement('br'));
			const oldtask = task;
			task = () => {if(box.checked) oldtask()}
		}
		tasks.push(task)
	},
	clearTasks: () => tasks = [],
	addButton: (onClick, label) => {
		const button = document.createElement('button');
		button.innerText = label;
		button.addEventListener('click', onClick);
		div.appendChild(button);
		div.appendChild(document.createElement('br'));
	},
}