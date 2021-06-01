
var x = new Date().getFullYear() + "-" + `${(new Date().getMonth() + 1)}`.padStart(2, "0") + "-" + new Date().getDate()
var minimum = new Date().getFullYear() + "-" + `${(new Date().getMonth() + 1)}`.padStart(2, "0") + "-" + (new Date().getDate() - 4)
document.getElementById("startdate").value = x;
document.getElementById("startdate").setAttribute("min", minimum);
document.getElementById("enddate").setAttribute("min", x);
var d = new Date();
var datestring = d.getDate()  + "-" + (d.getMonth()+1) + "-" + d.getFullYear() ;
document.getElementById("today").innerText += " "+datestring;
var y = document.getElementById("apply");
y.addEventListener("click", leaveapplyfun);
function leaveapplyfun() {
	document.getElementById("leaveapply").style.zIndex = "1";
	document.getElementById("leaveapply").style.display = "block";
	document.getElementById("leavepage").style.opacity = "0.1";
}

var currentuser;
var information=JSON.parse((localStorage.getItem("employees")));
    information.some( function(user){
	if(user.login==true){
		currentuser=user.data;
		return true;
	} 
}	
	)








document.getElementById("applybutton").addEventListener("click", leaveapplybutton);

var count = 0;
var arr = [];

if(currentuser["leavedata"]){
	arr=currentuser["leavedata"];
}



if(currentuser["Count"]){
	count=currentuser["Count"]-0;
}

function leaveapplybutton() {
	if (finaladd) {
		
		currentuser["leavecount" + leavetype]=finaladd;
				localStorage.setItem("employees",JSON.stringify(information));
	}
	else {
		
		currentuser["leavecount" + leavetype]=leavecount;
				localStorage.setItem("employees",JSON.stringify(information));
	}
	
		if(currentuser["dateslist"]){
		
		if (!flag) {
			for (var a = 0; a < bufferarray.length; a++) {
				
				previousarray.push(bufferarray[a]);
			}
			
			currentuser["dateslist"]=previousarray;
			localStorage.setItem("employees",JSON.stringify(information));

		}
	}
	else {
		
		currentuser["dateslist"]=bufferarray;
		localStorage.setItem("employees",JSON.stringify(information));
	}
	currentuser["leavetype"]=leavetype;
	document.getElementById("leaveapply").style.display = "none";
	document.getElementById("leavepage").style.opacity = "1";
	count++;
	
	currentuser["Count"]=count;
	arr.push({
		"leavetype": leavetype,
		"leavecount": leavecount,
		"startdate": changedstartdate,
		"enddate": changedenddate,
	})
	
	currentuser["leavedata"]=arr;
	
	document.getElementById("demo").innerText=currentuser["Count"];
	localStorage.setItem("employees",JSON.stringify(information));
	document.querySelector("input[type=button]").disabled = true;
}

if(currentuser["Count"]){
	document.getElementById("demo").innerText=currentuser["Count"];
}


document.getElementById('close').addEventListener('click', function () {
	document.querySelector('.leaveapply').style.display = 'none';
	document.getElementById("leavepage").style.opacity = "1";
});

var startdate;
var enddate;
var datesarray = [];
var changedstartdate;
var changedenddate;
function appliedleaves() {
	startdate = document.getElementById("startdate").value;
	
	enddate = document.getElementById("enddate").value;
	var x = startdate.split("-");
	 changedstartdate=`${x[2]}-${x[1]}-${x[0]}`;
	
	var y = enddate.split("-");
	changedenddate=`${y[2]}-${y[1]}-${y[0]}`;
	var todate = new Date(y[0], y[1] - 1, y[2]);
	var fromdate = new Date(x[0], x[1] - 1, x[2]);
	var i = (todate.getTime() - fromdate.getTime()) / (1000 * 3600 * 24);
	var days = 0;
	for (var j = 0; j <= i; j++) {
		var v = new Date(x[0], x[1] - 1, x[2] - 0 + j)
		datesarray.push(v);
		var daycheck = v.toLocaleDateString("en-us", {
			weekday: "long"
		});
		if (daycheck == "Saturday" || daycheck == "Sunday") {
		}
		else {
			days = days + 1;
		}
	}
	return days;
}
var leavecount;

var leavetypeelement = document.getElementById("leave");
var leavetype;
leavetypeelement.onchange = function () {
	leavetype = document.getElementById("leave").value;
	if (leavetype == "CompensatoryOff" || leavetype == "Maternity illness" || leavetype == "Maternity Leave" || leavetype == "Unpaid") {
		document.getElementById("message1").style.display = "block";
		document.getElementById("message3").style.display = "none";
		document.getElementById("message2").style.display = "none";
	}
	else {
		document.getElementById("message1").style.display = "none";
		document.getElementById("startdate").onchange = function () {
			start = document.getElementById("startdate").value;
			document.getElementById("enddate").setAttribute("min", start);
		}
		document.querySelector('#enddate').onchange = buttondisable(leavetype);

	}
}

var finaladd = 0;
var previousarray = [];
var flag = false;
var bufferarray = [];

function buttondisable(leavetype) {


	return function casual() {
		leavecount = appliedleaves();

		
			if(currentuser["dateslist"]){
			flag = false;
			
			previousarray=currentuser["dateslist"];
			JSON.parse(JSON.stringify(datesarray)).some(function (entry) {
				
				if (previousarray.includes(entry)) {
					flag = true;
					document.getElementById("message4").style.display = "block";
					document.querySelector("input[type=button]").disabled = true;
					return true;
				}

			}
			)
		}
		bufferarray = datesarray;
		datesarray = [];
		if (!flag) {
			document.getElementById("message4").style.display = "none";
			var availableleaves;
			
				availableleaves = document.getElementById(leavetype).innerText;
				currentuser["available"+leavetype]=availableleaves;
				localStorage.setItem("employees",JSON.stringify(information));
			

			if (leavecount <= availableleaves) {
				
					if(currentuser["leavecount" + leavetype]-0){
						var add=leavecount+(currentuser["leavecount" + leavetype]-0);
					if (add <= availableleaves) {
						document.getElementById("message3").style.display = "none";
						document.getElementById("message2").style.display = "none";
						finaladd = add;
						document.querySelector("input[type=button]").disabled = false;
					}
					else {
						document.getElementById("message3").style.display = "none";
						document.getElementById("message2").style.display = "block";
						document.querySelector("input[type=button]").disabled = true;
					}
				}
				else {

					document.getElementById("message3").style.display = "none";
					document.getElementById("message2").style.display = "none";
					document.querySelector("input[type=button]").disabled = false;

				}
			}
			else {
				document.getElementById("message3").style.display = "block";
				document.getElementById("message2").style.display = "none";
				document.querySelector("input[type=button]").disabled = true;
			}
		}
	}
}




document.getElementById("CasualSickLeave").innerText = new Date().getMonth()+1;
if(currentuser["leavesofCasualSickLeave"]){
	document.getElementById("CasualSickLeave").innerText = new Date().getMonth()+1-(currentuser["leavesofCasualSickLeave"]-0);
}
document.getElementById("EarnedLeave").innerText = new Date().getMonth()+1;
if (currentuser["leavesofEarnedLeave"]) {
	document.getElementById("EarnedLeave").innerText =  new Date().getMonth()+1-(currentuser["leavesofEarnedLeave"]-0);
}
document.getElementById("BereavementLeave").innerText = new Date().getMonth()+1;
if (currentuser["leavesofBereavementLeave"]) {
	document.getElementById("BereavementLeave").innerText =  new Date().getMonth()+1-(currentuser["leavesofBereavementLeave"]-0);
}
if(currentuser["leavesofOptionalHoliday"]){
	document.getElementById("OptionalHoliday").innerText=document.getElementById("OptionalHoliday").innerText-(currentuser["leavesofOptionalHoliday"]-0);
}

document.getElementById("casual").innerText=new Date().getMonth()+1;
document.getElementById("earned").innerText=new Date().getMonth()+1;
document.getElementById("bereav").innerText=new Date().getMonth()+1;






var p = document.getElementById("pending");
p.addEventListener("click", myfunction11);
function myfunction11() {
	document.getElementById("notification").style.display = "block";
	document.getElementById("leaveapply").style.display = "none";
	document.getElementById("leavepage").style.opacity = "0.1";
}
document.getElementById("notificationclose").addEventListener('click', function () {
	document.querySelector(".notificationpage").style.display = 'none';
	document.getElementById("leavepage").style.opacity = "1";
});

if (currentuser["leavedata"]) {
	var leavedata = currentuser["leavedata"];
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
		var node4 = document.createTextNode(" "+":"+" ");
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

document.getElementById("holidaylist").addEventListener("click", holidaylistfun);
function holidaylistfun() {
	document.getElementById("tables").style.display = "block";
	document.getElementById("leavepage").style.opacity = "0.1";
}
document.getElementById('holidayclose').addEventListener('click', function () {
	document.getElementById("tables").style.display = 'none';
	document.getElementById("leavepage").style.opacity = "1";
});

document.getElementById("optionallist").addEventListener("click", optionalholidayfun);
function optionalholidayfun() {
	document.getElementById("optionaltable").style.display = "block";
	document.getElementById("leavepage").style.opacity = "0.1";
}
document.getElementById('optionalclose').addEventListener('click', function () {
	document.getElementById("optionaltable").style.display = 'none';
	document.getElementById("leavepage").style.opacity = "1";
});


if(currentuser["leavehistory"]){
	var leavehistory=currentuser["leavehistory"];
	var mytable=document.querySelector("#table");
	var headers=["LEAVE TYPE","LEAVES","START DATE","END DATE","STATUS"];
	var table=document.createElement("table");
var headerrow=document.createElement("tr");
headers.forEach(headertext=>{
var header=document.createElement("th");
var textnode=document.createTextNode(headertext);
header.appendChild(textnode);
headerrow.appendChild(header);
});
table.appendChild(headerrow);
leavehistory.forEach(leaves=>{
var row=document.createElement("tr");
Object.values(leaves).forEach(text=>{
var cell=document.createElement("td");
var textnode=document.createTextNode(text);
cell.appendChild(textnode);
row.appendChild(cell);
})
table.appendChild(row);
});
mytable.appendChild(table);
}

document.getElementById("leavehistory").addEventListener("click", leavehistoryfun);
function leavehistoryfun() {
	document.getElementById("history").style.display = "block";
	document.getElementById("leavepage").style.opacity = "0.1";
}
document.getElementById('historyclose').addEventListener('click', function () {
	document.getElementById("history").style.display = 'none';
	document.getElementById("leavepage").style.opacity = "1";
});