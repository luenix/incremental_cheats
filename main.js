(function() {
	const id = 'cheat_ui_div';
	if(document.getElementById(id)) return;
	const div = document.createElement('div');
	div.id = id;
	div.style="border-width:3px;background-color:#cae8ca;border-style:solid;position:fixed;padding:7px;bottom:0;right:0;max-width:450px;z-index:999"
	document.body.appendChild(div);
})();

const tasks = [];

setInterval(()=>tasks.forEach(task => task()), 50);

export const libcheat = {
	addTask: (task) => tasks.push(task)
}