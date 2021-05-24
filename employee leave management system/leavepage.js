var x = new Date().getFullYear() + "-" + `${(new Date().getMonth() + 1)}`.padStart(2, "0") + "-" + new Date().getDate()
document.getElementById("startdate").value = x;
var today = new Date().toISOString().slice(0, 10)

document.getElementById("today").innerText += today;

var y = document.getElementById("apply");
y.addEventListener("click", myfunction1);
function myfunction1() {
	document.getElementById("dd").style.zIndex = "1";
	document.getElementById("dd").style.display = "block";
	document.getElementById("ddd").style.opacity = "0.1";
}


document.getElementById("applybutton").addEventListener("click", myfunction2);

var count = 0;
var arr = [];
if (localStorage.getItem("data")) {
	arr = JSON.parse(localStorage.getItem("data"));
}


if (localStorage.getItem("Count")) {
	count = localStorage.getItem("Count") - 0;
}


function myfunction2() {
	document.getElementById("dd").style.display = "none";
	document.getElementById("ddd").style.opacity = "1";
	count++;
	localStorage.setItem("Count", count);
	arr.push({
		"leavetype": leavetype,
		"leavecount": leavecount,
	})
	localStorage.setItem("data", JSON.stringify(arr));
	document.getElementById("demo").innerText = localStorage.getItem("Count");
	document.querySelector("input[type=button]").disabled = true;
}
document.getElementById("demo").innerText = localStorage.getItem("Count");




document.getElementById('close').addEventListener('click', function () {
	document.querySelector('.leaveapply').style.display = 'none';
	document.getElementById("ddd").style.opacity = "1";
});
function abc() {
	var startdate = document.getElementById("startdate").value;
	var enddate = document.getElementById("enddate").value;
	var x = startdate.split("-");
	var y = enddate.split("-");
	var i = y[2] - x[2];
	var coun = 0;
	for (var j = 0; j <= i; j++) {
		var v = new Date(x[0], x[1] - 1, x[2] - 0 + j)
		var vv = v.toLocaleDateString("en-us", {
			weekday: "long"
		});
		if (vv == "Saturday" || vv == "Sunday") {
		}
		else {
			coun = coun + 1;
		}
	}
	return coun;
}
var leavecount;

var leavetypeElement = document.getElementById("leave");
var leavetype;
leavetypeElement.onchange = function () {
	leavetype = document.getElementById("leave").value;
	if (leavetype == "Bereavement Leave" || leavetype == "Maternity illness" || leavetype == "Maternity Leave" || leavetype == "Unpaid") {
		document.getElementById("message1").style.display = "block";
	}
	else {
		document.getElementById("message1").style.display = "none";
		document.querySelector('#enddate').onchange = applyDisableHandler(leavetype);

	}
}
var leaveType = [];

function applyDisableHandler(leavetype) {
	leaveType.push(leavetype);
	localStorage.setItem("leavetype", JSON.stringify(leaveType));

	return function casual() {
		leavecount = abc();
		var availableleaves;
		if (localStorage.getItem("available" + leavetype)) {
			availableleaves = localStorage.getItem("available" + leavetype) - 0;
		}
		else {
			availableleaves = document.getElementById(leavetype).innerText;
			localStorage.setItem("available" + leavetype, availableleaves);
		}

		if (leavecount <= availableleaves) {
			if (localStorage.getItem("leavecount" + leavetype) - 0) {
				var add = leavecount + (localStorage.getItem("leavecount" + leavetype) - 0);
				if (add <= availableleaves) {
					document.getElementById("message3").style.display = "none";
					document.getElementById("message2").style.display = "none";
					localStorage.setItem("leavecount" + leavetype, add);
					document.querySelector("input[type=button]").disabled = false;
				}
				else {
					document.getElementById("message2").style.display = "block";
					document.querySelector("input[type=button]").disabled = true;
				}
			}
			else {
       
				localStorage.setItem("leavecount" + leavetype, leavecount);
				document.getElementById("message3").style.display = "none";
				document.querySelector("input[type=button]").disabled = false;

			}
		}
		else {
			document.getElementById("message3").style.display = "block";
			document.querySelector("input[type=button]").disabled = true;
		}
	}
}


if (localStorage.getItem("requestaccept") - 0) {
	document.getElementById("requestmessage1").style.display = "block";
}
if (localStorage.getItem("requestdelete") - 0) {
	document.getElementById("requestmessage2").style.display = "block";
}
document.getElementById("requestmessage1").addEventListener('click', function () {
	localStorage.removeItem("requestaccept");
	document.getElementById("requestmessage1").style.display = "none";
});
document.getElementById("requestmessage2").addEventListener('click', function () {
	localStorage.removeItem("requestdelete");
	document.getElementById("requestmessage2").style.display = "none";
});

if (localStorage.getItem("availableCasual_SickLeave")) {
	document.getElementById("Casual_SickLeave").innerText = localStorage.getItem("availableCasual_SickLeave");
}
if (localStorage.getItem("availableEarnedLeave")) {
	document.getElementById("EarnedLeave").innerText = localStorage.getItem("availableEarnedLeave");
}
if (localStorage.getItem("availableOptionalHoliday")) {
	document.getElementById("OptionalHoliday").innerText = localStorage.getItem("availableOptionalHoliday");
}
if (localStorage.getItem("availableCompensatoryOff")) {
	document.getElementById("CompensatoryOff").innerText = localStorage.getItem("availableCompensatoryOff");
}


var p = document.getElementById("pending");
p.addEventListener("click", myfunction11);
function myfunction11() {
	document.getElementById("notification").style.display = "block";
	document.getElementById("dd").style.display = "none";
	document.getElementById("ddd").style.opacity = "0.1";
}
document.getElementById("notificationclose").addEventListener('click', function () {
	document.querySelector(".notificationpage").style.display = 'none';
	document.getElementById("ddd").style.opacity = "1";
});

if (localStorage.getItem("data")) {
	var leavedata = JSON.parse(localStorage.getItem("data"));
	for (var i = 0; i < leavedata.length; i++) {
		var di = document.createElement("div");
		document.getElementById("notification").appendChild(di);
		di.setAttribute("class", "loop" + i);
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

