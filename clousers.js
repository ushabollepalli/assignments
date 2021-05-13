/*function x(){
var a=10;
function y(){
console.log(a);
}
var a=100;
y();
// return y;
}
x();
//x()();*/




/*function z(){
	var b=100;
	function x(){
		var a=10;
		function y(){
			console.log(a+b);
		}
		//y();
		return y;
	}
	//x();
	return x;
}
//console.log(z());
z()()();*/



/*function x(){
	for(let i=1;i<=5;i++){
		setTimeout(function(){
		console.log(i);},1000);
		}
		console.log("after the loop");
	}
	x();*/
	
	
function x(){
	for(var i=1;i<=5;i++){
		(function get(i){
		setTimeout(function(){
		console.log(i);},1000);
		}(i))
		
		//get(i);
	}
		console.log("after the loop");
	}
	x(); 
	
	
/*function outer(){
	var a=10;
	function inner(){
		console.log(a);
	}
	return inner;
}
outer()(); */


/*function outer(b){
	var a=10;
	function inner(){
		console.log(a,b);
	}
	return inner;
}
outer("usha")(); */

/*function outest(){
	var c=20;
	function outer(b){
		function inner(){
			console.log(a,b,c);
		}
		let a=10;
		return inner;
	}
	return outer;
}
//var a=100;
outest()(30)(); */

/*function a(){
	var x=1,z=10;
	return function b(){
		console.log(x);
	}
}
a()();*/



/*var  Volume1 = function(l){
	return function(h){
		return function(w){
			return l*w*h ;
		};
	}
};

var Volume2 = function(l,w,h){
	return l*w*h;
};

var Volume= function(l){
	return function(h,w){
		return l*w*h;
	};
};

console.log( Volume2(5,5,5));
console.log( Volume1(5)(5)(5));
console.log( Volume(5)(5,5)); */

/*function outest(a){
	
	function outer(b){
		function inner(c){
			console.log(a*b*c);
		}
	
		return inner;
	}
	return outer;
}
outest(5)(5)(5); */


	
/*	function outer(a){
		function inner(b,c){
			console.log(a*b*c);
		}
	
		return inner;
	}	
outer(5)(5,5); */

/*function outer(a,b,c){
		
			console.log(a*b*c);
	}	
outer(5,5,5);*/


var x=1;
a();
b();
console.log(x);
function a(){
	var x=10;
	console.log(x);
}

function b(){
	var x=20;
	console.log(x);
}
/*fun1(10,function(res1){
return res1;
}
);

function fun1(value,callback){
   var res1=callback(value+10);
    fun2(res1,function(res2){
        return res2;
   }
   );
    }
	
function fun2(value,callback){
 var res2=callback(value+10);
 fun3(res2,function(res3){
  return res3;
  
}
);
}

function fun3(value,callback){
var res3=callback(value+10);
console.lo(res3);}*/


	
	

