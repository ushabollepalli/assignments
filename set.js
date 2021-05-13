/*var x=new Set([1,2,3,4,5,5,4,3,2,1]);
console.log(x);*/

var x=new Set();
x.add(1);
x.add(2);
x.add("usha");
x.add({a:1,b:2});
x.add({a:1,b:2});
x.add(1);
x.add("usha");
x.add([1,2,3]);
x.add([1,2,3]);
x.add(new Set([1,2,3,3]));
console.log(x);
/*console.log(x.has(1));
console.log(x.size);
x.delete(2);
console.log(x);
for(var z of x){
	console.log(z);
}*/


/*function difference(x,y) {
    var xx = new Set(x)
    for (var elem of y) {
        xx.delete(elem)
    }
    return xx
}

var x = new Set([1, 2, 3, 4])
var y = new Set([2, 3])
console.log(difference(x, y));*/


/*var a = {x: 1};

var b = Object.create(a);

var c = Object.create(b);
c.y=3;

var d = Object.create(c);
d.x=4;
console.log(d.x+d.y);*/

var x = 10;
var y = x;   
y++;
console.log(x);   
console.log(y);


 
