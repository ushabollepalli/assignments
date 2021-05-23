var x=document.getElementById("email");
var y=document.getElementById("password");
var z=document.getElementById("submit");

z.addEventListener("click", (e) => {
    e.preventDefault();
    
    if ((x.value==localStorage.getItem('user id'))&& (y.value==localStorage.getItem('password')) ){
		document.location='employee.html';
	}
        
     else {
        alert("enter valid credentials");
    }
})