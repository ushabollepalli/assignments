var x = document.getElementById("email");
var y = document.getElementById("password");
var z = document.getElementById("submit");

z.addEventListener("click", (e) => {
    e.preventDefault();
	var data=JSON.parse((localStorage.getItem("employees")));
    var userflag=data.some( function(user){
	if(user.password+""==y.value){
		
		user.login=true;
		localStorage.setItem("employees",JSON.stringify(data));
		return true;
	} 
}	
	)

		if(userflag==true){
        document.location = 'leavepage.html';
    }
   
    else {
        alert("enter valid credentials");
    }
})



