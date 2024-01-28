function validate(){
return checkempty()&&validatemail();
}
function checkempty(){
	var x=document.getElementById("message").value;
	 
	if (x.trim()==""){
	alert("Message section can't be blank!");
	return false;
 	}
	return true;
}

function validatemail(){
	var mailformat= /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/;
	if(mailformat.test(document.getElementById("mail").value)){
		return true;
	}
	alert("Wrong e-mail format!")
	return false;
}
