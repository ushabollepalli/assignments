/*var x=new Promise((resolve,reject)=>{
resolve(1);
reject("sorry");
});
x.then((xx)=>console.log(xx)).catch((err)=>console.log(err));*/

/*var xx=new Promise((resolve,reject)=>{
setTimeout(resolve,1000,"foo")});
xx.then((x)=>{return x;}).then((y)=>{return y;}).then((z)=>{console.log(z);});*/

var pro1=new Promise((resolve,reject)=>{
	setTimeout(resolve,1000,"first");
});
pro1.then((x)=>{
	return pro2;
}).then((x)=>{
	return pro3;
}).then((x)=>{
console.log(x);});

var pro2=new Promise((resolve,reject)=>{
	setTimeout(resolve,2000,"second");
});/*.then((x)=>{
return x;}).then((x)=>{
return 10;});*/

var pro3=new Promise((resolve,reject)=>{
	setTimeout(resolve,3000,"third");
});

/*var pro4=new Promise((resolve,reject)=>{
	setTimeout(resolve,1000,"four");
});

pro4.then((x)=>{
console.log(x);});*/






/*console.log('hi');
setTimeout(()=>{console.log("iii");},2000);
var myPromise = new Promise(function (resolve, reject) {
	
    resolve("there");
});

function x(){
console.log("usha");
myPromise.then(function (result) {
    
    console.log(result); 
});
console.log("last");}
x();
console.log("bollepalli");*/




/*function returnPromises() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Promise Executed...");
      resolve("Sample Data");
    }, 3000);
  });
}

async function ExecuteFunction() {
  var getData = await returnPromises();
  console.log(getData);
}
console.log("usha");
ExecuteFunction();
console.log("bollepalli");*/



/*function main() {
  return new Promise( resolve => {
    console.log(3);
    resolve(4);
    console.log(5);
  });
}

async function f(){
    console.log(2);
    let r = await main();
    console.log(r);
}

console.log(1);
f();
console.log(6);*/

//without promise...

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


/*var myPromise = new Promise(function (resolve, reject) {
	//setTimeout(()=>{console.log("iii");},2000);
    resolve("usha")
});

//setTimeout(()=>{console.log("iii");},2000);

myPromise.then(function (result) {
    setTimeout(()=>{console.log("bollepalli");},2000);
    console.log(result); 
});

setTimeout(()=>{console.log("iii");},2000);*/

