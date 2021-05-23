/*document.getElementById("notificationclose").addEventListener('click', function(){
    document.querySelector(".notificationpage").style.display = 'none';
    document.getElementById("mainpage").style.opacity = "1";
});

document.getElementById("acceptclose").addEventListener('click', function(){
    document.querySelector(".acceptscreen").style.display = 'none';
   
});

if(localStorage.getItem("data")){
var leavedata=JSON.parse(localStorage.getItem("data"));
//console.log(leavedata);
for(var i=0;i<leavedata.length;i++){
	var para1=document.createElement("p");
	var node1=document.createTextNode(leavedata[i].leavetype);
	para1.appendChild(node1);
	document.getElementById("notification").appendChild(para1);	
	var para2=document.createElement("span");
	var node2=document.createTextNode(leavedata[i].leavecount);	
	para2.appendChild(node2);
	document.getElementById("notification").appendChild(para2);
}
}

var x=document.getElementById("notification");
for(var i=2;i<x.childElementCount;i++){
(x.children[i]).addEventListener("click", function(e){
    
    document.getElementById("acceptpage").style.display = "block";
	e.stopPropagation();
	var leavetype=this.textContent;
	
	var outernode=this;

	document.getElementById("accept").onclick=function(ev){
	
	
	
	var change=(localStorage.getItem("available"+leavetype)-0)-(localStorage.getItem("leavecount"+leavetype)-0);
	localStorage.setItem("available"+leavetype, change);
	var countchange=(localStorage.getItem("Count")-0)-1;
	localStorage.setItem("Count", countchange);
	var obj = (element) =>( element.leavetype == leavetype);
    var index=leavedata.findIndex(obj);
	
    leavedata.splice(index,1);
	
	localStorage.setItem("data",JSON.stringify(leavedata));
	
	localStorage.setItem("requestaccept",1);
	document.getElementById("acceptpage").style.display = "none";
	
	ev.stopPropagation();
	outernode.outerHTML="";
	
	
}

}

);

}

 var y = document.getElementById("screenbutton");
    y.addEventListener("click", myfunction1);
    function myfunction1() {
      document.getElementById("notification").style.display = "block";
      document.getElementById("mainpage").style.opacity = "0.1";
    }*/

/*document.getElementById("accept").addEventListener("click",function(ev){
	var leavetypedata=JSON.parse(localStorage.getItem("leavetype"));
	for(i=0;i<leavetypedata.length;i++){
	if(leavetypedata[i]==this.){
	var change=(localStorage.getItem("available"+leavetypedata[i])-0)-(localStorage.getItem("leavecount"+leavetypedata[i])-0);
	localStorage.setItem("available"+leavetypedata[i], change);
	}
	}
	//var change=(localStorage.getItem("available"+leavetypedata)-0)-(localStorage.getItem("leavecount"+leavetypedata)-0);
	//localStorage.setItem("available"+leavetypedata, change);
	//var zero=0;
	//localStorage.setItem("leavecount"+leavetypedata,zero);
	var countchange=(localStorage.getItem("Count")-0)-1;
	localStorage.setItem("Count", countchange);
	//localStorage.removeItem("data");
	
	document.getElementById("acceptpage").style.display = "none";
	//console.log(1);
	ev.stopPropagation();
}
);*/

