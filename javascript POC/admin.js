var currentuser;
var information = JSON.parse((localStorage.getItem("employees")));
information.some(function (user) {
	if (user.login == true) {
		currentuser = user.data;
		return true;
	}
}
)


document.getElementById("screenbutton").onclick = function () {
	document.getElementById("notification").style.display = "block";
	document.getElementById("card").style.opacity = "0.1";
}


document.getElementById("notificationclose").onclick = function () {
	document.querySelector(".notificationpage").style.display = 'none';
	document.getElementById("acceptpage").style.display = "none";
	document.getElementById("card").style.opacity = "1";
}



if (currentuser["leavedata"]) {
	var leavedata = currentuser["leavedata"];
	if (leavedata.length) {
		document.getElementById("screenbutton").style.backgroundColor = "red";
	}
	for (var i = 0; i < leavedata.length; i++) {
		var di = document.createElement("div");
		document.getElementById("notification").appendChild(di);
		di.setAttribute("class", "loop");
		di.setAttribute("id", "loop" + i);
		var para1 = document.createElement("span");
		var node1 = document.createTextNode(leavedata[i].leavetype);
		para1.appendChild(node1);
		document.getElementById("loop" + i).appendChild(para1);
		var para4 = document.createElement("span");
		var node4 = document.createTextNode(" " + ":" + " ");
		para4.appendChild(node4);
		document.getElementById("loop" + i).appendChild(para4);
		var para2 = document.createElement("span");
		var node2 = document.createTextNode(leavedata[i].leavecount);
		para2.appendChild(node2);
		document.getElementById("loop" + i).appendChild(para2);
		var para3 = document.createElement("p");
		var node3 = document.createTextNode(leavedata[i].startdate + " To " + leavedata[i].enddate);
		para3.appendChild(node3);
		document.getElementById("loop" + i).appendChild(para3);

	}
}

var notificationarray = [];

if (currentuser["leavehistory"]) {
	notificationarray = currentuser["leavehistory"];
}

var x = document.getElementById("notification");
for (var i = 3; i < x.childElementCount; i++) {
	(x.children[i]).onclick = function (e) {

		document.getElementById("acceptpage").style.display = "block";
		e.stopPropagation();
		var leavetype = this.textContent;
		var outernode = this;
		var inner1 = outernode.children[0].textContent;
		var inner2 = outernode.children[2].textContent;
		document.getElementById("accept").onclick = function (ev1) {

			if (currentuser["leavesof" + inner1]) {
				currentuser["leavesof" + inner1] = (currentuser["leavesof" + inner1] - 0) + ((inner2) - 0);
			}
			else {
				currentuser["leavesof" + inner1] = inner2;
			}

			var countchange = (currentuser["Count"] - 0) - 1;
			currentuser["Count"] = countchange;

			var obj = (element) => (element.leavetype == inner1 && element.leavecount == inner2);

			var index = leavedata.findIndex(obj);

			notificationarray.push({
				"leavetype": leavedata[index].leavetype,
				"leavecount": leavedata[index].leavecount,
				"startdate": leavedata[index].startdate,
				"enddate": leavedata[index].enddate,
				"status": "ACCEPT",
			})

			currentuser["leavehistory"] = notificationarray;
			localStorage.setItem("employees", JSON.stringify(information));
			leavedata.splice(index, 1);

			currentuser["leavedata"] = leavedata;

			var get = currentuser["leavecount" + inner1] - 0;
			var set = get - (inner2);
			currentuser["leavecount" + inner1] = set;
			localStorage.setItem("employees", JSON.stringify(information));
			document.getElementById("acceptpage").style.display = "none";
			document.getElementById("acceptpage").style.display = "none";
			ev1.stopPropagation();
			outernode.outerHTML = "";
		}
		document.getElementById("delete").onclick = function (ev2) {
			var countchange = (currentuser["Count"] - 0) - 1;
			currentuser["Count"] = countchange;
			var obj = (element) => (element.leavetype == inner1 && element.leavecount == inner2);
			var index = leavedata.findIndex(obj);
			notificationarray.push({
				"leavetype": leavedata[index].leavetype,
				"leavecount": leavedata[index].leavecount,
				"startdate": leavedata[index].startdate,
				"enddate": leavedata[index].enddate,
				"status": "DELETE",
			})

			currentuser["leavehistory"] = notificationarray;
			localStorage.setItem("employees", JSON.stringify(information));
			leavedata.splice(index, 1);

			currentuser["leavedata"] = leavedata;

			var get = currentuser["leavecount" + inner1] - 0;
			var set = get - (inner2);
			currentuser["leavecount" + inner1] = set;
			localStorage.setItem("employees", JSON.stringify(information));
			document.getElementById("acceptpage").style.display = "none";
			document.getElementById("acceptpage").style.display = "none";
			ev2.stopPropagation();
			outernode.outerHTML = "";
		}
	}

}




