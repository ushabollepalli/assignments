document.getElementById("notificationclose").addEventListener('click', function () {
	document.querySelector(".notificationpage").style.display = 'none';
	document.getElementById("mainpage").style.opacity = "1";
});

document.getElementById("acceptclose").addEventListener('click', function () {
	document.querySelector(".acceptscreen").style.display = 'none';

});

if (localStorage.getItem("data")) {
	//document.getElementById("screenbutton").style.backgroundColor="red";
	var leavedata = JSON.parse(localStorage.getItem("data"));
	for (var i = 0; i < leavedata.length; i++) {
		var di = document.createElement("div");
		document.getElementById("notification").appendChild(di);
		di.setAttribute("class", "loop");
		di.setAttribute("id", "loop" + i);
		var para1 = document.createElement("p");
		var node1 = document.createTextNode(leavedata[i].leavetype);
		para1.appendChild(node1);
		document.getElementById("loop" + i).appendChild(para1);
		var para2 = document.createElement("p");
		var node2 = document.createTextNode(leavedata[i].leavecount);
		para2.appendChild(node2);
		document.getElementById("loop" + i).appendChild(para2);

	}
}


var x = document.getElementById("notification");
for (var i = 2; i < x.childElementCount; i++) {
	(x.children[i]).addEventListener("click", function (e) {

		document.getElementById("acceptpage").style.display = "block";
		e.stopPropagation();
		var leavetype = this.textContent;
		var outernode = this;
		var inner1 = outernode.children[0].textContent;
		var inner2 = outernode.children[1].textContent;
		document.getElementById("accept").onclick = function (ev1) {
			var change = (localStorage.getItem("available" + inner1) - 0) - inner2;
			localStorage.setItem("available" + inner1, change);
			var countchange = (localStorage.getItem("Count") - 0) - 1;
			localStorage.setItem("Count", countchange);
			var obj = (element) => (element.leavetype == inner1 && element.leavecount == inner2);
			var index = leavedata.findIndex(obj);
			leavedata.splice(index, 1);
			localStorage.setItem("data", JSON.stringify(leavedata));
			localStorage.setItem("requestaccept", 1);
			var get = localStorage.getItem("leavecount" + inner1) - 0;
			var set = get - (inner2);
			localStorage.setItem("leavecount" + inner1, set);
			document.getElementById("acceptpage").style.display = "none";
			ev1.stopPropagation();
			outernode.outerHTML = "";
		}
		document.getElementById("delete").onclick = function (ev2) {
			var countchange = (localStorage.getItem("Count") - 0) - 1;
			localStorage.setItem("Count", countchange);
			var obj = (element) => (element.leavetype == inner1 && element.leavecount == inner2);
			var index = leavedata.findIndex(obj);
			leavedata.splice(index, 1);
			localStorage.setItem("data", JSON.stringify(leavedata));
			localStorage.setItem("requestdelete", 1);
			var get = localStorage.getItem("leavecount" + inner1) - 0;
			var set = get - (inner2);
			localStorage.setItem("leavecount" + inner1, set);
			document.getElementById("acceptpage").style.display = "none";
			ev2.stopPropagation();
			outernode.outerHTML = "";
		}
	}
	);
}

var y = document.getElementById("screenbutton");
y.addEventListener("click", myfunction1);
function myfunction1() {
	document.getElementById("notification").style.display = "block";
	document.getElementById("mainpage").style.opacity = "0.1";
}



