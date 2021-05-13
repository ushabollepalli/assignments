/*async function fun1(){
//console.log("usha");
return "usha";
}

var a=fun1();
console.log(a);*/


function calc(a,b){
	return new Promise(function(x,y){
		setTimeout(function(){
		
			x(a+b);
		},2000)
	})
}

/*calc(5,5).then((add)=>{
	//console.log(add);
	return calc(add,10)
}).then((result)=>{
	//console.log(result);
	return calc(result,10)
}).then ((res)=>{
console.log(res);})*/

var add=async function(){
	var res1=await calc(1,2);
	var res2=await calc(res1,3);
	return await calc(res2,4);
}
add().then(val =>{console.log(val)});

/*function main() {
    console.log(3);
    return 4;
}

async function f(){
    console.log(2);
    let r = await main();
    console.log(r);
}

console.log(1);
f();
console.log(5);*/


/*function main() {
    console.log(3);
    return 4;
}

async function f(){
    console.log(2);
    let r = main();
    console.log(r);
}

console.log(1);
f();
console.log(5);*/