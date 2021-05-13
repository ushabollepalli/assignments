//console.log(fetch('https://jsonplaceholder.typicode.com/todos/1'))

/*fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(res=> res.json())
.then(data=>console.log(data))*/


/*var user = {
  fname:"usha",
  lname:"bollepalli",
  age:90
};

var x=fetch("https://reqres.in/api/users",{
	method:"POST",
	body:JSON.stringify(user),
	headers:{'Content-Type': 'application/json'}
	}).then(function(x){
		return x.json();
	}).then(function(y){
		console.log(y);
	}).catch(function(err){
		console.log("error");
	});*/
	
var outside

fetch("https://raw.githubusercontent.com/ushabollepalli/files-html/main/1_YSA8lCfCVPn3d6GWAVokrA.png")
                        
  .then(response => response.blob())
  .then(images => {
     
      outside = URL.createObjectURL(images)
      console.log(outside);
	  var ele=document.createElement("img");
           ele.src=outside;
          document.querySelector('body').appendChild(ele);
  })
 
	
	
	
	
	


