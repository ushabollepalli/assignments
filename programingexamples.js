//lexical 

/*function outerFunc() {
  var x = 10;

  function innerFunc() {
    console.log(x); 
  }
  innerFunc();
}

outerFunc();*/

//clousers

/*function outerFunc() {
  var x = 10;

  function innerFunc() {
    console.log(x); 
  }
  return innerFunc;
}

var newfun = outerFunc();
newfun();*/

//callbcks


/*function add(a,b,calback){
	var c=10;
	calback(c);
	console.log(a+b+c);
}
function disp(d){
	console.log(d);
}

add(5,6,disp);*/




/*var c=10;
var result = (function x(number) {
  var message = number+c;
  return message;
})(100);*/




/*(function A(a) {
  return (function B(b) {
    console.log(a); 
  })(1);
})(0);*/




/*function multiply(a) {
   function innermulti(b) {
    return a * b;
  }
  return innermulti;
}

var double = multiply(2);*/
//double(3); 
//double(5); 


/*function counter(){
	var count=0;
	function inner(){
		count++;
		console.log(count);
	}
	return inner;
}
var outer=counter();
outer();*/





 
 

 
function counter(){
	var count=0;
	function inner(){
		count++;
		document.getElementById("demo").innerHTML=count;
	}
	return inner;
}
var outer=counter(); 
 
 
 







