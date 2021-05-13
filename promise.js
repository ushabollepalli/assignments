/*var a=new Promise(function(x,y){
var res=true;
if(res){
x("it is true");}
else{y("it is false");}
})
console.log(a);
a.then(function(val){console.log(val);})
.catch(function(val){console.log(val);})*/

/*var a=new Promise((x,y)=>{
	x("usha")
})

var b=new Promise((x,y)=>{
	x("bollepalli")
})

Promise.all([a,b]).then((message)=>{
	console.log("i am with"+ message)
})*/


var aa=function(){
	return new Promise(function(resolve,reject){
		setTimeout(()=>{
			var res=true;
			if(res){
				console.log("your promise resolved")
				resolve();
			}
			else{
				console.log("your promise not resolved")
				reject("sorry");
			}
	},2000);
})
};

aa().then(function(){
	console.log("thanks for resolving")
}).catch(function(error){
	console.log("sorry" +error)
})


/*function myDisplayer(some) {
  console.log(some);
}

var myPromise = new Promise(function(x, y) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', "https://jsonplaceholder.typicode.com/posts");
  xhr.onload = function() {
    if (xhr.status == 200) {
      x(JSON.parse(xhr.response));
    } else {
      y("File not Found");
    }
  };
  xhr.send();
});

myPromise.then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);*/





