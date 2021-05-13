function a(){
	var x=1,z=10;
	return function b(){
		console.log(x);
	}
}
var y=a();
y();