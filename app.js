var canvas = document.getElementById("canvas");

function startDraw(func = null) {
	console.log("startDraw");
	// ct.fillStyle = "#AAA";
	// ct.fillRect(0,0,1000,600);
	if (func) {
		func();
	}
}

function start() {
	console.log("start");
	startDraw();
}

startDraw(circle);

function circle() {
	console.log("circle");
	var ct = canvas.getContext("2d");
	ct.beginPath();
	ct.strokeStyle = "#A00";
	ct.lineWidth = 5;
	ct.strokeRect(100,100,200,200);
	// ct.arc(500, 300, 200, 0, 2*Math.PI);
	ct.stroke();
}