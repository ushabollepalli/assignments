var preval=[];
function add(n){
if(preval[n]!=null){
   return preval[n];
  }
  var result=0;
  for(var i=1;i<=n;i++){
    for(var j=1;j<=n;j++){
	    result=result+1;
		}
	}
preval[n]=result;
return result;
}
console.log(add(200));
console.log(add(200));
	