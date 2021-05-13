/*let form = document.getElementById('post');

let data = new FormData(form);

let formObj = serialize(data);

function serialize (data) {
	let obj = {};
	for (let [key, value] of data) {
		if (obj[key] !== undefined) {
			if (!Array.isArray(obj[key])) {
				obj[key] = [obj[key]];
			}
			obj[key].push(value);
		} else {
			obj[key] = value;
		}
	}
	return obj;
}*/


var xhr=new XMLHttpRequest();
var form = document.getElementById('post');
var obj = new FormData(form);
var data=new URLSearchParams(obj).toString();
xhr.open("POST","https://reqres.in/api/users");
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.onreadyStatechange=function(){
	if(xhr.readyState===4 && xhr.status===201){
		console.log(JSON.parse(xhr.response));
	}
	else if (xhr.readyState===4 && xhr.status!==201){
		console.log("error");
	}
}
xhr.send(data);

