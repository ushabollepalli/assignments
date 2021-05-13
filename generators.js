/*var x={
name:"usha",
age:90,
getname:function(){
return this.name;}
}

console.dir(x); */

/*var x=[1,2,3,4];
console.dir(x);*/

/*var x="usha";
for(var val of x){
	console.log(val);
}*/

/*var x=[1,2,3,4,5];
var it=x[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());*/

/*function *generator(){
	yield 1;
	yield 2;
	yield 3;
	yield 4;
};
var it=generator();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());*/

/*function *infinite(){
	var i=0;
	while(true){
		yield i;
		i++;
	}
}
var it=infinite();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());*/

/*function *generator(){
	yield 1;
	yield 2;
	//return "usha";
	yield *another();
	yield 4;
};
function *another(){
	yield 3;
};

var it=generator();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());*/

/*function* generator() {   
     
   yield 1;   
   yield 2;   
   yield 3;   
   yield 4;   
   yield 5;   
}   
for(let val of generator()) {   
   console.log(val);   
} */

function* generatorFunc() {

    console.log("usha");
    yield 100;
    
   console.log("bollepalli");
    yield 200;
}


var generator = generatorFunc();

console.log(generator.next());

 



