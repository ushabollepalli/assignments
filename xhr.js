/*let xhr = new XMLHttpRequest();
console.log("readyState 1 = "+ xhr.readyState);
xhr.open("GET","http://api.geonames.org/citiesJSON?north=44.1&south=-9.9&east=-22.4&west=55.2&lang=de&username=demo " );
xhr.send();
console.log("readyState 2 = "+ xhr.readyState);

xhr.onload = ()=>{
	console.log(xhr);
	console.log(xhr.responseText);
	console.log(JSON.parse(xhr.responseText));
	document.write(`<pre> ${xhr.response} </pre>`);
	console.log("readyState 3 = "+ xhr.readyState);
}

xhr.onprogress =()=>{
	console.log("readyState 4 = "+ xhr.readyState);
}*/


/*let xhr=new XMLHttpRequest();
//console.log(xhr);
//console.log(xhr.readyState);
xhr.open("GET",'https://jsonplaceholder.typicode.com/todos/1');

//console.log(xhr.readyState);
xhr.send();  //data request to server

//console.log(xhr.readyState);
/*xhr.onload=()=>{
	console.log(xhr.response)              //Json data-mechine readble-string formate
}*/



//the default format is text formate

/*xhr.onload=()=>{
	console.log(JSON.parse(xhr.response));
}*/
/*xhr.onload=()=>{
	document.write(xhr.response) 	
} */
/*xhr.onload=()=>{
document.write(`<pre> ${xhr.response} </pre>`);
}*/
/*xhr.onload=()=>{
	if(xhr.status==200){
		console.log(xhr.response)
	}
	else{
		console.log('error $(xhr.status)')
	}
}*/



//when the network disconnect
/*xhr.onerror=()=>{
	console.log(xhr);
}*/



/*var xhr=new XMLHttpRequest();
xhr.open("GET",'https://jsonplaceholder.typicode.com/todos/1');
xhr.onload=()=>{
	console.log((xhr.response));
}
xhr.send();*/
/*xhr.onload=()=>{
	console.log((xhr.response));
}*/

/*var xhr=new XMLHttpRequest();
xhr.open("GET",'https://jsonplaceholder.typicode.com/todos/1',false);
console.log(xhr.response);
xhr.send();
//console.log(xhr.response);*/





var xhr=new XMLHttpRequest();
var data='title=newpost&body=Body';
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


/*var xhr=new XMLHttpRequest();
xhr.open("GET",'https://jsonplaceholder.typicode.com/todos/1');
xhr.onreadyStatechange=function(){
	if(xhr.readyState===4 && xhr.status===201){
		console.log(JSON.parse(xhr.response));
	}
	else if (xhr.readyState===4 && xhr.status!==201){
		console.log("error");
	}
}
xhr.send();*/





/*var xhr1=new XMLHttpRequest();
xhr1.open("GET",'https://jsonplaceholder.typicode.com/todos/1');
//var outer;
//var inner;
xhr1.onload=function(){
	console.log(xhr1.response);
	var xhr2=new XMLHttpRequest();
	xhr2.open("GET",'https://jsonplaceholder.typicode.com/comments');
	xhr2.onload=function(){
		console.log(xhr2.response);
	}
	xhr2.send();
}
xhr1.send();

var sync=new XMLHttpRequest();
sync.open("GET",'https://jsonplaceholder.typicode.com/posts',false);
//var syncres;
sync.send();
console.log(sync.response);*/





/*var xhr1=new XMLHttpRequest();
xhr1.open("GET",'https://jsonplaceholder.typicode.com/todos/1');
//var outer;
//var inner;
xhr1.send();
xhr1.onload=function(){
	//console.log(xhr1.response);
	var xhr2=new XMLHttpRequest();
	xhr2.open("GET",'https://jsonplaceholder.typicode.com/comments');
	xhr2.onload=function(){
		console.log(xhr2.response);
		console.log(xhr1.response);
	}
	xhr2.send();
	//console.log(xhr1.response);
}
//xhr1.send();

var sync=new XMLHttpRequest();
sync.open("GET",'https://jsonplaceholder.typicode.com/posts',false);
//var syncres;
sync.send();
console.log(sync.response);*/




/*var xhr1=new XMLHttpRequest();
xhr1.open("GET",'https://jsonplaceholder.typicode.com/todos/1');
//var outer;
//var inner;
xhr1.onload=function(){
	console.log(xhr1.response);
	var xhr2=new XMLHttpRequest();
	xhr2.open("GET",'https://jsonplaceholder.typicode.com/comments');
	xhr2.onload=function(){
		console.log(xhr2.response);
	}
	xhr2.send();
	var sync=new XMLHttpRequest();
    sync.open("GET",'https://jsonplaceholder.typicode.com/posts',false);
    //var syncres;
    sync.send();
    console.log(sync.response);
}
xhr1.send();*/



/*var sync=new XMLHttpRequest();
sync.open("GET",'https://jsonplaceholder.typicode.com/posts',false);
//var syncres;
sync.send();
console.log(sync.response);*/






/*var sync=new XMLHttpRequest();
sync.open("GET",'https://jsonplaceholder.typicode.com/posts',false);
//var syncres;
sync.send();
var xhr1=new XMLHttpRequest();
xhr1.open("GET",'https://jsonplaceholder.typicode.com/todos/1');
//var outer;
//var inner;
xhr1.onload=function(){
	console.log(xhr1.response);
	var xhr2=new XMLHttpRequest();
	xhr2.open("GET",'https://jsonplaceholder.typicode.com/comments');
	xhr2.onload=function(){
		console.log(xhr2.response);
	}
	xhr2.send();
}
xhr1.send();
console.log(sync.response);*/










